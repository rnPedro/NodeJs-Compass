const express = require('express'); // importando o express
const app = express(); // Iniciando o express

app.get("/",function(requisição,resposta){
    resposta.send("bem vindo ao pedro bet"); // enviar a resposta uma vez apenas, nao enviar multiplas respostas
});


//Rotas opcionais, sem passar o parametro  
app.get("/blog/:artigo?",function(req,res){
    
    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>");
    }else{
        res.send("<h1>Bem vindo ao meu site</h1>");
    }

});

app.get("/canal/youtube",function(req,res){
    var canal = req.query["canal"];

    if(canal){
        res.send(canal);

    }else{
        res.send("Nenhum canal fornecido");
    }



    
});
//criando um parametro /:param
app.get("/ola/:nome/:empresa", function(req, res){
    // REQ => DADOS ENVIADOS PELO USUARIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUARIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + "</h1>");
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})