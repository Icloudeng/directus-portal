import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.local" });

import fetch from "node-fetch";

const BASE_URL = process.env.LISTMONK_BASE_URL || "";
const ADMIN_USERNAME = process.env.LISTMONK_ADMIN_USERNAME || "";
const ADMIN_PASSWORD = process.env.LISTMONK_ADMIN_PASSWORD || "";
const LIST_ID = process.env.LISTMONK_LIST_ID || "";

export default class ListmonkClient {
  private baseUrl: string = BASE_URL;
  private adminUsername: string = ADMIN_USERNAME;
  private adminPassword: string = ADMIN_PASSWORD;
  private listId: string = LIST_ID;

  constructor() {
    if (
      !this.baseUrl ||
      !this.adminUsername ||
      !this.adminPassword ||
      !this.listId
    ) {
      throw new Error(
        "vars BASE_URL, ADMIN_USERNAME, ADMIN_PASSWORD, LIST_ID cannot be empty"
      );
    }
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
