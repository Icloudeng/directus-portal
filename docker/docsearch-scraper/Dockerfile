# Scraper (https://github.com/typesense/typesense-docsearch-scraper.git)
FROM typesense/docsearch-scraper as scraper

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
    sudo apt-get install -y nodejs

COPY tools/docsearch-scraper ./custom-scraper

RUN cd ./custom-scraper && npm install --prod

ENV IS_DOCKER=true

RUN mkdir -p ./custom-scraper/meta

VOLUME [ "/root/custom-scraper/meta" ]

ENTRYPOINT ["node", "./custom-scraper/index.js"]