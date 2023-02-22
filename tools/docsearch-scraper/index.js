//@ts-check
import * as dotenv from "dotenv";
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import { setInterval } from "node:timers";
import which from "which";
import config from "./config.json" assert { type: "json" };

dotenv.config({ path: "./docker.env" });

const ORIGIN = process.env.DOCS_WEB_URL;
const IS_DOCKER = process.env.IS_DOCKER;

(async () => {
  const start_urls = config.start_urls;

  const regenerateUrls = async () => {
    try {
      /**
       * @type {{ url: string; variables: { lang: string[];};}[]}
       */
      const urls = JSON.parse(
        await fs.readFile("./meta/start-urls.json", { encoding: "utf-8" })
      );

      urls.forEach((path) => {
        start_urls.push({
          url: `${ORIGIN}/documentation${path.url}`,
        });
      });
    } catch (error) {
      console.log("parse error: ", error);
    }
  };

  if (IS_DOCKER) {
    const pipenv = await which("pipenv");

    const pending = {
      value: false,
    };

    const exec = async () => {
      if (pending.value) {
        return;
      }

      console.log("scraping.....");

      await regenerateUrls();

      pending.value = true;

      // Exec scraper command
      cmd(
        {
          ...(process.env || {}),
          CONFIG: JSON.stringify(config),
        },
        [pipenv, "run", "python", "-m", "src.index"]
      )
        .finally(() => {
          pending.value = false;
        })
        .catch(console.log);
    };

    setInterval(exec, 1000 * 30);
  } else {
    // regenerate Urls
    await regenerateUrls();
    const docker = await which("docker");
    await cmd(
      {
        ...(process.env || {}),
      },
      [
        docker,
        "run",
        "--name=docsearch-scraper",
        "--net=host",
        "--rm",
        "--add-host=host.docker.internal:host-gateway",
        "--env-file=docker.env",
        "-e",
        `CONFIG=${JSON.stringify(config)}`,
        "typesense/docsearch-scraper",
      ]
    );
  }
})();

/**
 *
 * @param {NodeJS.ProcessEnv} env
 * @param  {string[]} commands
 * @returns
 */
function cmd(env, commands) {
  let p = spawn(commands[0], commands.slice(1), { cwd: process.cwd(), env });
  return new Promise((resolveFunc) => {
    p.stdout.on("data", (x) => {
      process.stdout.write(x.toString());
    });
    p.stderr.on("data", (x) => {
      process.stderr.write(x.toString());
    });
    p.on("exit", (code) => {
      resolveFunc(code);
    });
  });
}
