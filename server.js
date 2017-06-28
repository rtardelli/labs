const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(bodyParser.json());

// End - Middlewares

// Static files
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello New World!!");
});

app.listen(port, () => {
    console.log("Servidor ligado na porta 3000");
});