//@ts-check
import { spawn } from "node:child_process";
import jq from "node-jq";
import which from "which";

(async () => {
  const docker = await which("docker");

  const data = await jq.run(".", ["./config.json"], {
    output: "string",
  });

  await cmd(
    docker,
    "run",
    "--name=docsearch-scraper",
    "--rm",
    "--add-host=host.docker.internal:host-gateway",
    "--env-file=docker.env",
    "-e",
    `CONFIG=${data}`,
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
