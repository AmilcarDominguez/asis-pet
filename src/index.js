const express = require("express");
const cors = require('cors');
const multer = require("multer");
const upload = multer({ dest: "upload/" });
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(cors());

//Routes del caso de uso
require('./routes/usuario.route')(app);
require('./routes/mascota.route')(app);
require('./routes/gasto-mascota.route')(app);
require('./routes/vacuna-mascota.route')(app);
require('./routes/peluqueria-mascota.route')(app);
require('./routes/banho-mascota.route')(app);
app.listen(3000, () => console.log("listening on port 3000"));