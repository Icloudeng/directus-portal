import fetch from "node-fetch";

type Options = {
  baseUrl: string;
  adminUsername: string;
  adminPassword: string;
  listId: string;
  templateId: string;
};
export class ListmonkClient {
  private baseUrl: string;
  private adminUsername: string;
  private adminPassword: string;
  private listId: string;
  private templateId: string;

  constructor(options: Options) {
    this.baseUrl = options.baseUrl;
    this.adminUsername = options.adminUsername;
    this.adminPassword = options.adminPassword;
    this.listId = options.listId;
    this.templateId = options.templateId;
  }

  public hasValidConfig() {
    return (
      !!this.baseUrl &&
      !!this.adminUsername &&
      !!this.adminPassword &&
      !!this.listId &&
      !!this.templateId
    );
  }

  public async subscribe(email: string) {
    const params = new URLSearchParams({
      list_id: this.listId,
      per_page: "1",
      page: "1",
      query: `subscribers.email = '${email}'`,
    });
    const { data: exists, response } = await this.fetch<
      LResponse<LPaginator<Subscriber>>
    >(`/subscribers?${params.toString()}`);

    if (!response.ok || exists.data.results.length > 0) {
      return null;
    }

    const { data: subscriber, response: res } = await this.fetch<
      LResponse<Subscriber>
    >("/subscribers", "POST", {
      email,
      name: email.split("@")[0],
      status: "enabled",
      lists: [+this.listId],
    });

    if (!res.ok) {
      return null;
    }

    return subscriber.data;
  }

  public async createCampaign(body: CampaignRequest) {
    const { data: campaign, response } = await this.fetch<LResponse<Campaign>>(
      "/campaigns",
      "POST",
      body
    );

    if (!response.ok) {
      return null;
    }

    return campaign.data;
  }

  public async campaignStatus(
    id: number,
    status: "scheduled" | "running" | "paused" | "cancelled"
  ) {
    const { data: campaign, response } = await this.fetch<LResponse<Campaign>>(
      `/campaigns/${id}/status`,
      "PUT",
      { status }
    );

    if (!response.ok) {
      return null;
    }

    return campaign.data;
  }

  private fetch<T>(path: string, method = "GET", body?: any) {
    const datas: { body?: string } = {};
    if (body) {
      datas["body"] = JSON.stringify(body);
    }
    const url = this.baseUrl.at(-1) === "/" ? this.baseUrl : this.baseUrl + "/";

    return fetch(url + "api" + path, {
      ...datas,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          `Basic ` + btoa(`${this.adminUsername}:${this.adminPassword}`),
      },
    }).then(async (res) => {
      return {
        data: (await res.json()) as T,
        response: res,
      };
    });
  }
}

export interface LResponse<T> {
  data: T;
}

export interface LPaginator<T> {
  results: T[];
  query: string;
  total: number;
  per_page: number;
  page: number;
}

export interface CampaignRequest {
  name: string;
  subject: string;
  lists: number[];
  from_email?: string;
  content_type: "richtext" | "html" | "markdown" | "plain";
  messenger: "email";
  type: "regular" | "optin";
  tags: string[];
  body: string;
  template_id: number;
  send_at?: string;
}

interface Campaign {
  id: number;
  created_at: string;
  updated_at: string;
  views: number;
  clicks: number;
  bounces: number;
  lists: List[];
  started_at: any;
  to_send: number;
  sent: number;
  uuid: string;
  type: string;
  name: string;
  subject: string;
  from_email: string;
  body: string;
  altbody: any;
  send_at: any;
  status: string;
  content_type: string;
  tags: string[];
  template_id: number;
  messenger: string;
}

export interface Subscriber {
  id: number;
  created_at: string;
  updated_at: string;
  uuid: string;
  email: string;
  name: string;
  attribs: Attribs;
  status: string;
  lists: List[];
}

export interface Attribs {
  city: string;
  projects: number;
  stack: Stack;
}

export interface Stack {
  frameworks: string[];
  languages: string[];
}

export interface List {
  subscription_status: string;
  id: number;
  uuid: string;
  name: string;
  type: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface List {
  id: number;
  created_at: string;
  updated_at: string;
  uuid: string;
  name: string;
  type: string;
  optin: string;
  tags: string[];
  subscriber_count: number;
}
