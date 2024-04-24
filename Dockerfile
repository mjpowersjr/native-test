FROM node:20-alpine

RUN apk add --no-cache --virtual .build-deps alpine-sdk python3

COPY . /app

WORKDIR /app

RUN npm install
