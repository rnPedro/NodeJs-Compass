
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            var deuErro = true;

            if(!deuErro){
                resolve(); //promessa ok
            }else{
                reject() // falha
            }




        },4000)
    });
}

enviarEmail("Olá mundo", "pedronatallindo").then(() =>{
    console.log("Opa, voce conseguiu fazer o que me prometeu")
}).catch(() =>{
    console.log("QUE PENA, NAO DEU!");
});