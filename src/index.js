const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

//Routes del caso de uso 
require('./routes/usuario.route')(app);

app.listen(3000)