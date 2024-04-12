# Use the official Node.js image as the base image
FROM node:20.10-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/app/libfriend-services

COPY package.json ./

COPY ./libfriend-data/package.json ./libfriend-data/package.json
COPY ./libfriend-auth/package.json ./libfriend-auth/package.json
COPY ./libfriend-core/package.json ./libfriend-core/package.json

RUN yarn install

COPY ./libfriend-data ./libfriend-data
COPY ./libfriend-auth ./libfriend-auth
COPY ./libfriend-core/ ./libfriend-core

RUN yarn build-auth

# Expose port 3000 (adjust if your application uses a different port)
EXPOSE 3000

# Command to run the application
CMD node -r ts-node/register --env-file=.env libfriend-auth/src/server/server.ts
