function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------------------------------------------
            ${corpo}
            ----------------------------------------------------------------
            De: Pedro Henrique
        `)
        callback("OK",5,"8s","Pedro");
    },8000)
}

console.log("Inicio do envio de email!!!");

enviarEmail("Oi, seja bem vindo a betano", "pedronatalr@gmail.com", (status, amount, time, nome) => {
    console.log(`
        De: ${nome}
        status: ${status}
        -----------------
        Contatos: ${amount}
        ----------------    
        tempo de envio: ${time}
    `)
    console.log("Tudo OK!");
});

