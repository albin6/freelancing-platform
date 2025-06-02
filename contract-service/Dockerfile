FROM node:23-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4004

CMD [ "node", "dist/index.js" ]