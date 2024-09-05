function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------------------------------------------
            ${corpo}
            ----------------------------------------------------------------
            De: Pedro Henrique
        `)
        callback();
    },8000)
}

console.log("Inicio do envio de email!!!");

enviarEmail("Oi, seja bem vindo a betano", "pedronatalr@gmail.com", ( ) => {
    console.log("Seu email foi enviado, deve chegar em minutos");
    console.log("Tudo OK!");
});
