//Criando a conexão com mongodb
const mongoose = require('mongoose');

//Configurando o mongoose
mongoose.Promisse = global.Promisse;
mongoose.connect("mongodb://localhost/aprendendodb", {
  useMongoClient: true;
}).then(() => {
  console.log("mongooDB conectado...");
}).catch((err) => {
  console.log("Houve um erro ao tentar se conectar com o mongooDB: " +err);
});
