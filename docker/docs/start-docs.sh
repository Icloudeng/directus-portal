cd /app/apps/docs && pm2 start npm --name ${DOCS_APP_PM2_NAME} -- run start
cd /app/tools/docs-generator && pm2 start npm --name ${DG_APP_PM2_NAME} -- run start
