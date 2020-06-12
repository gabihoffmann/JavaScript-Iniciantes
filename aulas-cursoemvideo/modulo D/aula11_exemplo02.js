/*
        Condições em JavaScript
    
    Condição composta: (IF ... ELSE) 

    if (confition) {
        action true
    } else {
        action false
    }

    Condições aninhadas: (IF ... ELSEIF)
     if (confition) {
        action true
    } else if(condition){
        action true (2)
    }else{
        action false
    }



*/

//Exemplo condição if-else
var pais = 'Brasil'
console.log(`vivendo em ${pais}`);
if (pais != 'Brasil'){
    console.log('Você é estrangeiro')
}else{
    console.log('Você é Brasileiro')
}

//Exemplo condição if-else-aninhada
var idade = 22;
if (idade < 16){
    console.log('Não vota');
}else if(idade < 18 || idade > 65){
    console.log('Seu voto é opcional')
}else{
    console.log('Seu voto é obrigatório')
}

//Exemplo condição if-else-aninhada
var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são ${hora} horas`)
if(hora < 12){
    console.log('Bom dia!');
}else if(hora < 18 ){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
