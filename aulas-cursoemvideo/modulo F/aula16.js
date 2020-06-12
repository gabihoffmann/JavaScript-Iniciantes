// Function
function parimpar(n){// função com parametro
    if(n%2 == 0){
        return 'par';
    }else{
        return 'impar';
    }
}// uma função tem apenas um retorno

console.log(parimpar(3)); //chamada da função parimpar

function soma(n1=0 , n2=0){ //os parametros foram pré definidos para evitar que a soma resulte em NaN
    return n1+n2;
}

console.log(`A soma é: ${soma(2)}`)


let v = function(x){
    return x*2
}

console.log(v(5)) //function é um objeto e pode ser armazenado em uma variavel


function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(`Fatorial de 5: ${fatorial(5)}`);

function fatorial2(n){
    if (n == 1){
        return 1
    }else{
        return n * fatorial2(n-1)
    }
}

console.log(`O fatorial recursivo de 5 é ${fatorial2(5)}`)