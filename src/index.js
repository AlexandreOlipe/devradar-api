const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:zfN4p3lpngvfTesQ@cluster0-sl20d.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //ativar recebimento de json para todos os endpoints e verbos
app.use(routes);


app.listen(3333);