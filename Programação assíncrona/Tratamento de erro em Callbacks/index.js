function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        //......... logica

        var deuErro = false;

        if(deuErro){
            callback(12,"O envio do email falhou!");
        }else{
            callback(12);
        }
    },8000)
}

console.log("Inicio do envio de email!!!");

enviarEmail("Oi, seja bem vindo a betano", "pedronatalr@gmail.com", (time, erro) => {
    if(erro == undefined){
            console.log("TUDO OK");
            console.log(`tempo: ${time}s`);
    }else{// deu erro
        console.log("Ocorreu um erro: " + erro);
    }
});
