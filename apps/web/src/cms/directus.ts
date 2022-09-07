import { CMS_API_URL, IMAGE_PRESETS } from '@/constant/cms';
import { wait } from '@/utils/wait';
import { Directus, PartialItem, Sort, TypeMap } from '@directus/sdk';

if (!CMS_API_URL) {
  throw new Error('CMS_API_URL env must be set');
}

const email = process.env.CMS_ADMIN_EMAIL;
const password = process.env.CMS_ADMIN_PASSWORD;

if (!email || !password) {
  throw new Error('CMS_ADMIN_EMAIL | CMS_ADMIN_PASSWORD must be set');
}

class CMSClient {
  private _instance: Directus<TypeMap>;
  private authenticated = false;
  private fails = 0;

  constructor() {
    this._instance = new Directus(CMS_API_URL!, {
      auth: {
        autoRefresh: true,
        msRefreshBeforeExpires: 30000,
      },
    });
  }

  private async authenticate() {
    // Let's login in case we don't have token or it is invalid / expired
    while (!this.authenticated) {
      if (this.fails >= 30) {
        throw new Error('DIRECTUS authentication failed after 30 attempts');
      }
      await this._instance.auth
        .login({ email: email!, password: password! })
        .then((data) => {
          this.authenticated = true;
          console.log('Authenticated');
        })
        .catch(() => {
          console.log('Authentication failed');
          this.fails += 1;
        });

      await wait(2000);
    }
  }

  private async getInstance() {
    await this.authenticate();

    return this._instance;
  }

  public get instance() {
    return this.getInstance();
  }
}

export const directus_client = new CMSClient();
