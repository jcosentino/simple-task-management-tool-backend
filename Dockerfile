FROM node:lts

WORKDIR /opt/simple-task-management-tool-backend

COPY package.json ./
COPY package-lock.json ./
RUN npm install --production && npm install -g typescript && npm install -g sequelize-cli
COPY . .
RUN npm run build
RUN sequelize db:create && sequelize db:migrate

EXPOSE 5000

ENV ENV_FILE=.env

CMD [ "npm", "start" ]
