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


function pegarUsuarios(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        resolve([
            {name: "Pedro", lang: "JS"},
            {name: "Lucas", lang: "C"},
            {name: "Cleiton", lang: "Java"}
        ])
    },3000)
    })
}


async function principal(){
    var usuarios = await pegarUsuarios();
    console.log(usuarios);
    console.log("OLA!");
}

principal();




/*
pegarId(). then((id) => {
    buscarEmailNoBanco(id).then((email) => {

        enviarEmail("Olá, como vai?", email).then(() => {
            console.log("Email enviado, para o usuario com id: " + id);
        }).catch(err =>{
            console.log(err);
        })


    })
})
*/