import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if(!process.env.NODE_ENV){ process.env.NODE_ENV = 'development'; }
console.log(`Starting environment: ${process.env.NODE_ENV}`);

// models
const models = require('./models');
models.sequelize.sync().then(() => {
    console.log('Database is properly configured!');
}).catch((err) => {
    console.log(err, 'The database was not properly configured!');
})

require('./routes')(app);

app.get('/', (req, res) => {
    res.status(200).send("Hello world!");
});

app.get('*', (req, res) => {
    res.status(200).send({
        message: '404!'
    });
});

app.listen(port, () => {
    return console.log(`Server is listening on port: ${port}`);
}).on('error', console.log);

export default app;
