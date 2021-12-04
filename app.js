const express = require('express');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const cors = require('cors');

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use( (req,res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
  app.use(cors());
  next();
})

app.get('/', function(req, res){
    res.send('END POINT INVÁLIDO!');
  });
  
const routesProduto = require('./routes/produtos');
const routesUser = require('./routes/user');
const routesToken = require('./routes/token');

app.use('/api/produto', routesProduto);
app.use('/api/user', routesUser);
app.use('/api/token', routesToken);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})