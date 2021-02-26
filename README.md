# Simple Task Management Tool (Backend)
Foobar is a Python library for dealing with word pluralization.

## Installation
Download and install [NodeJS LTS](https://nodejs.org/en/).
Confirm that the application installed by issuing the command:
```bash
node -v
```
You should see a similar printout:
```bash
$ node -v
v14.15.5
```

Next, globally install the following NPM module:

```bash
npm install -g npm@latest typescript sequelize-cli tslint
```

Download and install [Docker](https://www.docker.com/).
Confirm that the application installed by issuing the command:
```bash
docker -v
```

You should see a similar printout:
```bash
$ docker -v
Docker version 20.10.2, build 2291f61
```

Download and install [MySQL](https://www.mysql.com/).
The default username is ```root``` and the default password is blank. See this [site](https://tableplus.com/blog/2018/11/what-is-the-default-username-password-in-mysql.html) for assistance.

It should be noted that ```MySQL``` runs on ```localhost (127.0.0.1)``` on port ```3306``` by default.

Upon installing the necessary prerequisites, you should run the following commands to initialize the database tables:
```
sequelize db:create
sequelize db:migrate
```

## Usage
Starting the application is easy! Run the following command:
```bash
npm start
```

If you would like to run tests, run this command:
```bash
npm test
```

If you would like to run the linter, run this command:
```bash
npm lint
```

If you would like to build the application, run this command:
```bash
npm build
```

To Dockerize the application, run the following command from the application's root directory:
```bash
docker build -t simple-task-management-tool-backend .
```

Then, run the Docker application, assuming port 5000:
```bash
docker run --rm -p 5000:5000 --name simple-task-management-tool-backend simple-task-management-tool-backend:latest
```

## Customization
To set MySQL credentials, application run environment, or application port, you may create a ```.env``` file in the application's root directory:

```
# App configurations
NODE_ENV='development'
PORT=5000

# Sequelize / Database configurations
DB_USER_DEV='root'
DB_PASSWD_DEV='password'
DB_DATABASE_DEV='my_db_development'
DB_HOST_DEV='127.0.0.1'
DB_DIALECT_DEV='mysql'

DB_USER_PROD='root'
DB_PASSWD_PROD='password'
DB_DATABASE_PROD='my_db_production'
DB_HOST_PROD='127.0.0.1'
DB_DIALECT_PROD='mysql'
```

# Swagger
You can reach the Swagger UI here, where {PORT} is your port number from ```env```: ```http://localhost:{PORT}/api-docs/```
