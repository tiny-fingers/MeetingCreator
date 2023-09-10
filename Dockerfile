FROM node:lts

WORKDIR /meeting-creator

COPY ./package.json ./
COPY ./angular.json ./
COPY ./tsconfig.app.json ./
COPY ./tsconfig.json ./
COPY src/ ./src/

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start-docker"]
