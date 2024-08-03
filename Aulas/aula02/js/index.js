const express = require('express');
const app = express();
const porta = 5000

let produtos = [
  {
    nome: "Bolo de morango",
    valor: 70,
    descricao: "Bolo gostoso",
    imagem: 'https://img.elo7.com.br/product/main/30B68A0/bolo-de-morango-bolo-suspiro-de-morango.jpg',
  },
  {
    nome: "Bolo de cenoura",
    valor: 50,
    descricao: "Bolo alaranjado",
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnF_b-vTzqKCxAhV1-cLzwgPqW9NZzeeUHzw&s',

  },
  {
    nome: "Bolo de chocolate",
    valor: 80,
    descricao: "Bolo de chocolate ao leite",
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnZYRrzdjh8SL2znlxsamM4xyPRmXcWgM3g&s',
  }
]

app.get('/', (requisicao, resposta) => {
  try {
  return resposta.json(produtos).status(200);
  } catch (error){
    return resposta.json({message: "operação inválida"}).status(400);
  }
})

app.get('/jogos', (requisicao, resposta) => {
  let queryUrl = requisicao.query;
  console.log(requisicao.query);

  return resposta.json(queryUrl).status(200);
})

app.listen(porta, () => {
  console.log(`http://localhost:${porta}`);
});