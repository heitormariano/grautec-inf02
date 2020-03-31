//criando funções em JavaScript

function soma(a, b) {
    return a + b;
}
let resultado = soma(30, 50);
console.log("Resultado soma: " + resultado);

function calcularMedia(nota01, nota02) {
    let soma = nota01 + nota02;
    let media = soma / 2;
    return media;
}

let mediaAluno = calcularMedia(6, 8);
console.log("Media aluno: " + mediaAluno);


function imprimirDados(nome, sobrenome, idade) {
    let frase = "O meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos";
    return frase;
}
console.log(imprimirDados("Heitor", "Camara", 32));