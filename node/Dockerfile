FROM node:latest

RUN npm install -g nodemon

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package.json package.json


RUN npm install
ADD . /usr/src/app/
EXPOSE 3000

CMD ["nodemon", "bin/www"]
