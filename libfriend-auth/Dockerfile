# Use the official Node.js image as the base image
FROM node:20.10-slim

WORKDIR /home/app/libfriend-services


COPY package.json tsconfig.json ./
COPY ./libfriend-data/package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (adjust if your application uses a different port)
EXPOSE 3000

# Command to run the application
CMD node -r ts-node/register --env-file=.env src/server/server.ts
