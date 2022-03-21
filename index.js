const express = require('express');
const route = require('./src/route/router');
const cors = require('cors');
const app = express();

app.use(route);
app.use("*",cors());

const port = process.env.port || 3000;

app.listen(port, () => {
    try {
        console.log(`Running on ${port} . click to view : http://localhost:${port}`);
    } catch (error) {
        throw error;
    }
});