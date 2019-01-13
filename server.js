// Usa un comando require de node para enlazar el modulo Express a la variable y acceder a toda su API
var express = require('express');

// Create our app --> Cual va a ser la APP que manejaremos
var app = express();

// Ahora debemos decirle a Express que carpeta es la que queremos publicar en la Web
app.use(express.static('public'));

// Luego le decimo que puerto escuchar y que comando correr una vez cargado
app.listen(3000, function(){
  console.log('Express server is up on port 3000')
});
