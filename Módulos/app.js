var mostrarSite = true;
const site = "www.guiadoprogramador.com";


console.log("Hello world!");
console.log("Meu nome é Pedro");
console.log("Eu sou o better");

if(mostrarSite){
    console.log(site);
}


var calculadora = require("./calculadora");


console.log(calculadora.mult(10,20));
console.log(calculadora.soma(20,40));
calculadora.nome = "Calculadora do Pedro";
console.log(calculadora.nome);