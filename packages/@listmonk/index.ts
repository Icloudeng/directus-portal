import fetch from "node-fetch";

export default class ListmonkClient {
  constructor(
    private baseUrl: string,
    private adminUsername: string,
    private adminPassword: string
  ) {
    if (!baseUrl || !adminUsername || !adminPassword) {
      throw new Error(
        "vars baseUrl, adminUsername, adminPassword cannot be empty"
      );
    }
  }

  private fetch<T>(path: string, body?: any) {
    const datas: { body?: string } = {};
    if (body) {
      datas["body"] = JSON.stringify(body);
    }
    fetch(this.baseUrl, {
      ...datas,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${this.adminUsername}:${this.adminPassword}`,
      },
    }).then(async (res) => {
      return {
        data: (await res.json()) as T,
        response: res,
      };
    });
  }
}
