const mongoose = require('mongoose');

// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
//mongoose.connect('mongodb+srv://clZISyhI02sq9QPI:FiON9kBJAIQ4cL25@cluster0.gprnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
console.log(process.env.DBSECRET)
mongoose.connect(`mongodb://produtosApplication:${process.env.DBSECRET}@localhost:27017/produtos?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`);
// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'test');
});

// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

module.exports = mongoose;
