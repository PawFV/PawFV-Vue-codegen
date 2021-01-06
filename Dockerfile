FROM node:12-alpine


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .env ./build

EXPOSE 3500

CMD node ./build/src/index