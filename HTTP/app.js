var http = require('http');

http.createServer(function(requisição, resposta){
    resposta.end("<h1> Bem vindo ao meu site!</h1><br><h4>Pedrobet.com.br</h4>");
}).listen(3000);
console.log("Meu servidor esta rodando...");