FROM node:12
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install
RUN npm i express mongoose shortid body-parser
RUN npm i -D nodemon
COPY . .

EXPOSE 3000
EXPOSE 3001

CMD [ "npm", "start" ]