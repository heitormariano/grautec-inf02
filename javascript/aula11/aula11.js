// criando variáveis
let nome = "Heitor";
let nota = 10;
let curso = "Informática";

console.log(nome);
console.log(nota);
console.log(curso);

//usando estrutura if
if (nota > 7) {
    console.log("Aluno aprovado");
}

//notas de aluno
let aluno = "Carlos";
let notaPort = 8;
let notaMat = 3;
let media = (notaPort + notaMat) / 2;
console.log(media);

//usando if...else
if (media > 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let irParaPraia = true;

if (irParaPraia) {
    console.log("Variavel true");
} else {
    console.log("Variavel false");
}

let num01 = 500;
let num02 = 600;

if (num01 > num02) {
    console.log(num01 + " é maior do que " + num02);
} else {
    console.log(num02 + "é maior do que " + num01);
}

//usando if...else if...else
let salario = 3200;

if (salario < 1200) {
    console.log("Salario menor do que 1200");
} else if (salario < 2500) {
    console.log("Salário menor do que 2500");
} else if (salario <= 3200) {
    console.log("Salário menor ou igual a 3200");
} else {
    console.log("Outro Resultado");
}

//OPERADORES lÓGICOS
/*
&& --> AND (E)
|| --> OR (ou)
*/

/* ! --> NEGAÇÃO
*/

//TABELA VERDADE (com base no operador &&)
// true && false ==> FALSE
// false && true ==> FALSE
// false && false ==> FALSE
// true && true ==> TRUE

//TABELA VERDADE (com base no operador ||)
// true || false ==> TRUE
// false || true ==> TRUE
// true || true ==> TRUE
// false || false ==> FALSE

let mediaAluno = 7.0;

if (mediaAluno > 5 && mediaAluno < 7) {
    console.log("Aluno em recuperação");
} else if (mediaAluno >= 7 && mediaAluno <= 8) {
    console.log("Aluno aprovado");
} else if (mediaAluno >= 8) {
    console.log("Aluno aprovado com louvor");
} else {
    console.log("Aluno reprovado");
}