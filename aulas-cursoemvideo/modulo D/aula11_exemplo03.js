/*
        Condições em JavaScript
    
    Condições Múltipla
    A condicional switch avalia uma expressão, 
    combinando o valor da expressão para um cláusula case, 
    e executa as instruções  associadas ao case.

    switch(expression){
        case value 1:
            action
            break;
        case value 2:
            action
            break;
        case value n:
            action
            break;
        default:
            action
            break;

    }


*/

//Exemplo condições multiplas
var agora = new Date();
var diaSem = agora.getDay();
/*
    domingo - 0
    segunda - 1
    terça - 2 

*/
switch(diaSem){
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda');
        break
    case 2:
        console.log('Terça');
        break
    case 3:
        console.log('Quarta');
        break
    case 4:
        console.log('Quinta');
        break
    case 5:
        console.log('Sexta');
        break
    case 6:
        console.log('Sabado');
        break
}