//@ts-check
require("dotenv").config();
const { Directus } = require("@directus/sdk");

const directus = new Directus(`http://${process.env.HOST}:${process.env.PORT}`);

async function main() {
  await new Promise((resolve) => {
    setTimeout(
      resolve,
      process.env.IS_DOCKER === "true" ? 1000 * 80 : 1000 * 30
    );
  });

  try {
    // await directus.auth.login({
    //   email: process.env.ADMIN_EMAIL,
    //   password: process.env.ADMIN_PASSWORD,
    // });
  } catch (_) {
    return;
  }

  // await createUser(await appRole());
}

main();
