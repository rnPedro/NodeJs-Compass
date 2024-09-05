function enviarEmail(corpo, para){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------------------------------------------
            ${corpo}
            ----------------------------------------------------------------
            De: Pedro Henrique
        `)
    },8000)
}

console.log("Inicio do envio de email!!!");

enviarEmail("Oi, seja bem vindo a betano", "pedronatalr@gmail.com");

console.log("Seu email foi enviado, deve chegar em minutos");
console.log("Tudo OK!");