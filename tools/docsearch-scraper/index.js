//@ts-check
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

(async () => {
  const { stdout, stderr } = await execAsync(
    `docker run --name=docsearch-scraper --rm --add-host=host.docker.internal:host-gateway --env-file=docker.env -e "CONFIG=$(cat config.json | jq -r tostring)" typesense/docsearch-scraper`,
    {
      cwd: process.cwd(),
    }
  );
  if (stderr) {
    console.error(stderr);
  }
  console.log(stdout);
})();
