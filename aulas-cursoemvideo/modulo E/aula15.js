/**
 * é uma estrutura de dados que armazena uma coleção de elementos 
 * de tal forma que cada um dos elementos possa ser identificado 
 * por, pelo menos, um índice
 */
let num = [5,6,7];
console.log(num);
console.log(num.length); //comprimento
console.log(num[0]); //acessando conteúdo dado o indice do elemento

num[3] = 9; //adicionando contéudo a uma posição especifica
console.log(num);
num.push(1); // adicionando elemento ao final do vetor
console.log(num);
console.log(`vetor ordenado: ${num.sort()}`) //ordenar vetor

for(let ind= 0 ; ind < num.length ; ind++ ){
    console.log(`o elemento ${num[ind]} está na posição ${ind}`)
}

for(let aux in num){
    console.log(`o elemento ${num[aux]} está na posição ${aux}`)
}

console.log(`O valor 4 está na posição ${num.indexOf(4)}`)