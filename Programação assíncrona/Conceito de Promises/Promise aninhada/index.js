
function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(5);
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pedro@nerd.com");
        },2000);
    })
}

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

pegarId(). then((id) => {
    buscarEmailNoBanco(id).then((email) => {

        enviarEmail("Olá, como vai?", email).then(() => {
            console.log("Email enviado, para o usuario com o id: " + id);
        }).catch(err =>{
            console.log(err);
        })


    })
})