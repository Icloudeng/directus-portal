import { createClient } from "redis";

const CHANNEL = "docs-generator-999";

type Client = ReturnType<typeof createClient>;

export type DataType =
  | "pages"
  | "footer"
  | "meta"
  | "namespaces"
  | "languages"
  | "server";

export type DataPayload = {
  payload: Record<string, any>;
  collection: string;
  keys?: string[];
  key?: string;
} & (
  | {
      event: `${string}.items.update`;
    }
  | {
      event: `${string}.items.create`;
    }
  | {
      event: `${string}.items.delete`;
      payload: never;
    }
  | {
      event: `${string}.items.sort`;
      key: never;
      item: any;
      to: any;
      payload: never;
    }
  | {
      event: never;
      key: never;
      item: never;
      to: never;
      payload: never;
    }
);
function publisher(client: Client) {
  return <T extends DataPayload>(type: DataType, data: T) => {
    return client.publish(
      CHANNEL,
      JSON.stringify({
        type,
        data,
      })
    );
  };
}

function subscriber(client: Client) {
  return <T>(callback: (message: { type: DataType; data: T }) => void) => {
    return client.subscribe(CHANNEL, (message) => {
      callback && callback(JSON.parse(message));
    });
  };
}

function unsubscribe(client: Client) {
  return () => client.unsubscribe(CHANNEL);
}

/**
 * Create redis client
 * @param redis If this value is not provided, the REDIS_URL env will be used instead
 */
export async function connect(redisUrl?: string) {
  const url = redisUrl || process.env.REDIS_URL;
  if (!url) {
    throw new Error("Cannot find REDIS_URL");
  }

  const pubsub = createClient({ url });

  await pubsub.connect();

  return {
    publish: publisher(pubsub),
    subscribe: subscriber(pubsub),
    unsubscribe: unsubscribe(pubsub),
  };
}
