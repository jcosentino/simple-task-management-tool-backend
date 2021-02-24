import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    return console.log(`Server is listening on port: ${port}`);
}).on('error', console.log);
