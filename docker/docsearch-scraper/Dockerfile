# Scraper (https://github.com/typesense/typesense-docsearch-scraper.git)
FROM typesense/docsearch-scraper as scraper

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
    sudo apt-get install -y nodejs

COPY tools/docsearch-scraper/package.json ./package.json

RUN npm install --omit=dev

COPY tools/docsearch-scraper ./

ENV IS_DOCKER=true

RUN mkdir -p ./meta

RUN chmod -R 777 ./meta

VOLUME [ "/root/meta" ]

ENTRYPOINT ["node", "index.js"]