FROM node:12-alpine3.11
WORKDIR /app
COPY package.json package.json
RUN yarn
COPY . .
RUN yarn run build
CMD [ "yarn", "export" ]