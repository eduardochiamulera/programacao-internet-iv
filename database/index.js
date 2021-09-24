const mongoose = require('mongoose');

// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
//mongoose.connect('mongodb+srv://clZISyhI02sq9QPI:FiON9kBJAIQ4cL25@cluster0.gprnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/produtos?readPreference=primary&appname=MongoDB%20Compass&ssl=false');

// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'test');
});

// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

module.exports = mongoose;
