const { rejects } = require("assert");

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            var deuErro = false;

            if(!deuErro){
                resolve({time: 6, to: "Pedro"}); //promessa ok
            }else{
                reject("Fila cheia") // falha
            }




        },4000)
    });
}

enviarEmail("Olá mundo", "pedronatallindo").then(({ time, to}) =>{
    console.log(`
          Time: ${time}
          --------------------
          To: ${to}
    
    
    `)
}).catch((erro) =>{
    console.log("QUE PENA, NAO DEU: " + erro);
});