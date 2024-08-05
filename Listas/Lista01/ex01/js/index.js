const express = require ('express'); // Requere o express
const app = express();//inicializa o express
const port = 5000

//Banco de dados:
let produtos = [
  {
    nome: "Samsung",
    valor: 3000,
    descricao: "Celular top",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AGWTATr3TdMgwnVHfLFvjmx4KB2wVH1Emg&s"
  },
  {
    nome: "IPhone",
    valor: 10000,
    descricao: "Celular top",
    imagem:"https://justfive5.wordpress.com/wp-content/uploads/2010/10/iphone-3g-de-8gb.jpg"
  },
  {
    nome: "Motorola",
    valor: 5000,
    descricao: "Celular top",
    imagem:"https://s2-techtudo.glbimg.com/6IB2i2Ss6Rmfg22WMY9gjLnsvXQ=/0x0:695x420/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/6/8/7ALDqsQrKrZASz4THubg/2016-05-24-1-razr-v3.jpg"
  },
]

// Quando chamar "/" com get envie uma resposta:
// No caso, substituímos o ".send" por ".json" para converter o arquivo direto
// Aqui estamos listando todos os produtos:
app.get('/', (requisicao, resposta) => {
  try {
  return resposta.json(produtos).status(200);
  } catch (error) {
    return resposta.json({message: "operação inválida"}).status(400);
  }
})

// Use query para buscar o produto pelo nome
app.get('/produto', (requisicao, resposta) => {
  let nomeProduto = requisicao.query.nome; // Obtém o valor da query string 'nome'
  let produtoEncotrado = produtos.find(produto => produto.nome === nomeProduto);  // Procura o produto pelo nome

  // Se o produto for encontrado, retorna o produto
  if (produtoEncotrado){
    resposta.json(produtoEncotrado);
  } else {
   resposta.status(404).send("Produto não encontrado. Tente novamente");// Envia uma resposta com status 404
  }
})
// Observacao: No Express, a forma correta de enviar uma resposta ao cliente é utilizando métodos como res.json(), res.send(), res.status(), entre outros, do objeto res (resposta).

// Define a porta que deve ser escutada:
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

