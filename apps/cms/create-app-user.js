require("dotenv").config();
const { Directus } = require("@directus/sdk");

const directus = new Directus(`http://${process.env.HOST}:${process.env.PORT}`);

async function appRole() {
  let roleId = null;
  const token = await directus.roles.readByQuery({
    filter: {
      name: "smatflow-query",
    },
  });

  roleId = token.data[0]?.id;

  if (!roleId) {
    const token = await directus.roles.createOne({
      name: "smatflow-query",
      admin_access: true,
      app_access: false,
      icon: "app_registration",
    });
    roleId = token.id;
  }

  return roleId;
}

async function createUser(role) {
  const { data } = await directus.users.readByQuery({
    filter: {
      email: { _eq: process.env.APP_USER_EMAIL },
    },
  });

  if (!data[0]) {
    await directus.users.createOne({
      email: process.env.APP_USER_EMAIL,
      password: process.env.APP_USER_PASSWORD,
      token: process.env.APP_USER_TOKEN,
      role,
    });
    console.log("User created");
  } else {
    console.log("User exists");
  }
}

async function main() {
  await new Promise((resolve) => {
    setTimeout(
      resolve,
      process.env.IS_DOCKER === "true" ? 1000 * 80 : 1000 * 30
    );
  });

  try {
    await directus.auth.login({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });
  } catch (_) {
    return;
  }

  await createUser(await appRole());
}

main();
