FROM node:16-alpine3.15

RUN apk add --no-cache bash
RUN yarn global add @nestjs/cli

USER node

WORKDIR /home/node/app
