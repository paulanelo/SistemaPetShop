const servicos = require('./servicos');
let listaDePets = require('./listaDePets.json');
const { listarPets, castrar } = require('./servicos');

// Prática II:
// desenvolver rotas de acesso:
// “/” --> deve listar todos os pets
// “/pet/" --> deve buscar pelo rga do pet e trazer o resultado na tela
// “/pet/add” --> deve cadastrar o pet com os dados passados pelo parâmetro
// (nome e rga) e trazer mensagem de feedback ao cliente se deu certo ou não)

const http = require('http');
const url = require('url');
http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-type': 'text/plain;charset=utf-8',
    });
    const parsedReq = url.parse(req.url, true);
    const rota = parsedReq.pathname;
    const { name, rga } = parsedReq.query;
    switch (rota) {
      case '/':
        let pets = servicos.listarPets(listaDePets);
        res.end(pets);
        break;
    }
  })
  .listen(3030, 'localhost', () => {
    console.log('Server on');
  });
