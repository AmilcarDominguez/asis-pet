const express = require("express");
const bodyparser = require("body-parser");
//const multer = require("multer");
const app = express();
//const upload = multer({ dest: "uploads/" });
const cors = require('cors');
app.use(cors());
app.use(bodyparser());

//Routes del caso de uso
require('./routes/usuario.route')(app);
require('./routes/mascota.route')(app);
require('./routes/gasto-mascota.route')(app);
app.listen(3000)