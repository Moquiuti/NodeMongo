//Criando a conexão com mongodb
const mongoose = require('mongoose');

//Configurando o mongoose
mongoose.Promisse = global.Promisse;
mongoose.connect("mongodb://localhost/aprendendodb", {
  useMongoClient: true
}).then(() => {
  console.log("mongooDB conectado...");
}).catch((err) => {
  console.log("Houve um erro ao tentar se conectar com o mongooDB: " +err);
});

//Model - Usuários
//Definindo o Model
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  }
});

//Collection
mongoose.model('usuarios', UsuarioSchema);

//Registrando uma referência de usuario
const novoUsuario = mongoose.model('usuarios');

//Criando um novo usuario
new novoUsuario({
  nome: 'Leandro',
  sobrenome: 'Moquiuti',
  email: 'leandro@gmail.com',
  idade: 31,
  pais: 'Brasil'
}).save().then(() => {
  console.log("Usuário Criado com Sucesso!");
}).catch((err) => {
  console.log("Falha ao criar usuário: " +err);
});
