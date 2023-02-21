# Scraper (https://github.com/typesense/typesense-docsearch-scraper.git)
FROM typesense/docsearch-scraper as scraper

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
    sudo apt-get install -y nodejs

COPY tools/docsearch-scraper/package.json ./custom-scraper/package.json

RUN cd ./custom-scraper && npm install --omit=dev

COPY tools/docsearch-scraper ./custom-scraper

ENV IS_DOCKER=true

RUN mkdir -p ./custom-scraper/meta

RUN chmod -R 777 ./custom-scraper/meta

VOLUME [ "/root/custom-scraper/meta" ]

ENTRYPOINT ["node", "./custom-scraper/index.js"]