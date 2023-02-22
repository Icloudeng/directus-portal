pnpm --filter "./apps/${WORK_APP}" run setup
/app/apps/cms/node_modules/.bin/concurrently "pnpm --filter \"./apps/${WORK_APP}\" run start" "node \"./apps/${WORK_APP}/create-app-user.js\""
