// Criar servidor HTTP:
const http = require('http');
const port = 5000;

const produtos = [
  {nome: 'bolo de morango', valor: 50, img: 'https://www.sabornamesa.com.br/media/k2/items/cache/b07e2fc4e76a8b6328e5a3a4644fb265_XL.jpg'},
  {nome: 'bolo de chocolate', valor: 45, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJA8yrxXERU5qT0-H1aj2WSsOT0DmjvHZarQ&s'},
];

const requestHandler = (req,res) => {
 res.setHeader('Access-Control-Allow-Origin', '*') // permite acesso a tudo (*) no servidor.
  res.write(JSON.stringify(produtos))
  return res.end();
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log('Servidor rodando na porta 5000');
})
