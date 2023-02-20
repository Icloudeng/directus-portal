module.exports = {
  apps: [
    {
      name: process.env.DOCS_APP_PM2_NAME || "docs-app",
      script: "npm run serve",
      cwd: "/app/apps/docs",
      env: {
        NODE_ENV: "production",
        ...(process.env ? process.env : {}),
      },
    },
    {
      name: process.env.DG_APP_PM2_NAME || "docs-generator",
      script: "npm run start",
      cwd: "/app/tools/docs-generator",
      env: {
        NODE_ENV: "production",
        ...(process.env ? process.env : {}),
      },
    },
  ],
};
