    FROM node:6
    WORKDIR /app
    COPY NewsApiAM/package.json /app
    RUN npm install
    COPY express_server/package.json /app
    RUN npm install
    COPY . /app
    EXPOSE 4200
    CMD node express_server/app