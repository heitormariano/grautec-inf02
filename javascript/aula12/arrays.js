// criando arrays
let carros = ["Uno", "Onix", "March", "Etios"];
console.log(carros);

let numeros = [10, 20, 30, 40, 50];
console.log(numeros);

// recuperando elementos de um array
// Sintaxe: nomeArray[indice_elemento]
/*
array numeros
elemento 10 --> índice 0
elemento 20 --> índice 1
elemento 30 --> índice 2
...
último elemento --> índice (n - 1)
 */

let primeiroElem = numeros[0];
console.log(primeiroElem);

console.log("Primeiro elemento: " + numeros[0]);
console.log("Segundo elemento: " + numeros[1]);
console.log("terceiro elemento: " + numeros[2]);

// recuperando o tamanho do array
// Sintaxe: nomeArray.length
let qtdElementos = numeros.length;
console.log("Qtd elemetos Array: " + qtdElementos);

// adicionando elementos no array
// usando o método push()
let nomes = ["Heitor", "Pedro", "Joao", "Tiago"];
console.log(nomes);

nomes.push("Paulo"); //adiciona o elemento "Paulo" no final do array
console.log(nomes);

nomes.push("Michel"); //adiciona o elemento "Michel" no final do array
console.log(nomes);

// Excluindo elementos de um array
// usando o método pop()

let elemExcluido = nomes.pop();
console.log("Elemento excluído: " + elemExcluido);
console.log(nomes);

elemExcluido = nomes.pop();
console.log("Novo elemento excluído: " + elemExcluido);
console.log(nomes);

elemExcluido = nomes.pop(); // método pop() retorna o elemento excluído
console.log("Elemento excluído: " + elemExcluido);
console.log(nomes);