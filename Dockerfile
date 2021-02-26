FROM alpine:3.13

WORKDIR /opt/simple-task-management-tool-backend

RUN apk update && apk add mysql mysql-client nodejs npm openrc --no-cache

ENV ENV_FILE=.env
ENV MYSQL_USER=${DB_USER_DEV}
ENV MYSQL_PASSWORD=${DB_PASSWD_DEV}
ENV MYSQL_DATABASE=${DB_DATABASE_DEV}
ENV MYSQL_HOST=${DB_HOST_DEV}
ENV PORT=${PORT}

COPY package.json ./
COPY package-lock.json ./
RUN npm install --production && npm install -g typescript && npm install -g sequelize-cli

COPY . .
RUN npm run build

RUN sequelize db:create && sequelize db:migrate

EXPOSE 5000

CMD [ "npm", "start" ]
