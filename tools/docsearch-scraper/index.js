//@ts-check
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import which from "which";
import config from "./config.json" assert { type: "json" };

const ORIGIN = "http://host.docker.internal:3100";

(async () => {
  const docker = await which("docker");
  const start_urls = config.start_urls;

  try {
    /**
     * @type {{ url: string; variables: { lang: string[];};}[]}
     */
    const urls = JSON.parse(
      await fs.readFile("./start-urls.json", { encoding: "utf-8" })
    );

    urls.forEach((path) => {
      start_urls.push({
        url: `${ORIGIN}/documentation/(?P<lang>.*?)${path.url}`,
        variables: path.variables,
      });
    });
  } catch (_) {}

  await cmd(
    docker,
    "run",
    "--name=docsearch-scraper",
    "--net=host",
    "--rm",
    "--add-host=host.docker.internal:host-gateway",
    "--env-file=docker.env",
    "-e",
    `CONFIG=${JSON.stringify(config)}`,
    "typesense/docsearch-scraper"
  );
})();

function cmd(...command) {
  let p = spawn(command[0], command.slice(1), { cwd: process.cwd() });
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
