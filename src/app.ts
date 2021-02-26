import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// Upload information from swagger.ts to Swagger UI
import swaggerUi from 'swagger-ui-express';
// tslint:disable-next-line: no-var-requires
const swaggerDocument = require(__dirname + '/swagger/swagger.ts');
const router = express.Router();
const app = express();
dotenv.config();
const port = process.env.PORT ? process.env.PORT : 5000;

// Activate the logger
app.use(morgan('combined'));
// Allows for pulling body data from a request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Swagger implementation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

if(!process.env.NODE_ENV){ process.env.NODE_ENV = 'development'; }
console.log(`Starting environment: ${process.env.NODE_ENV}`);
console.log(`Database username: ${process.env.DB_USER_DEV}`)

// Tests database connection
import db from './models';
db.sequelize.sync().then(() => {
    console.log('Database is properly configured!');
}).catch((err) => {
    console.log(err, 'The database was not properly configured!');
})

// Enables routing
// tslint:disable-next-line: no-var-requires
require('./routes')(app);

// Simple hello world response for root route
app.get('/', (req, res) => {
    res.status(200).send("Hello world!");
});

// 404 check
app.get('*', (req, res) => {
    res.status(200).send({
        message: '404 This route does not exist!'
    });
});

app.listen(port, () => {
    return console.log(`Server is listening on port: ${port}`);
}).on('error', console.log);

export default app;
