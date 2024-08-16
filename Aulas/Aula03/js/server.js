//Importing express:
const express = require('express');

// constante que inicializa express:
const app = express();

//constante da porta:
const port = 5000;

//Aviso a minha aplicação que vou usar
app.use(express.json());

let database = [];

//Endpoint:
app.get('/', (req, res) => {
  try {
      return res.status(200).json({produtos: database});
  } catch (error) {
      return res.status(500).json({mensagem:error});
  }
})

//Endpoint:
app.post('/adicionar-produto', (req, res) => {
  try {
    let produto = {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao
    }  

    // salvando produtos no banco de dados:
    database.push(produto);

    return res.status(201).json({mensagem: "produto adicionado com sucesso."})

  } catch (error) {
    return res.status(500).json({mensagem: error});
  }
})
app.listen(port, () => {
  console.log("Servidor executando.")
  console.log(`http://localhost:${port}`)
})