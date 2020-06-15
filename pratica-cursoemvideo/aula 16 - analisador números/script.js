let num = document.getElementById("txtnumber");
let list = document.getElementById("flista");
let result = document.getElementById("res");
let numbers = [];

function adicionar(){
    if (isNumber(num.value)){
        let number = parseInt(num.value,10);
        if(inRange(number)){
            if(inList(number)){
                alert('O número já foi adicionado. Tente novamente')
            }else{
                numbers.push(number);
                addList(number);
                result.innerHTML = ""
            }
        }else{
            alert('O valor está fora dos limites. Tente novamente')
        }
    }else{
        alert('Não é número. Tente novamente')
    }
    
    num.value = "entre 1 e 100"
}

function isNumber(input){
    return Number.isInteger(parseInt(input,10));
}

function inList(input){
    return numbers.includes(input);
}

function inRange(input){
    return input >= 1 && input <= 100 
}

function addList(input){
    let item = document.createElement('option');
    item.text = `Valor ${input} adicionado`;
    list.appendChild(item);
}

function analizar(){
    if(numbers.length !== 0){
        let total = numbers.length;
        let soma = numbers.reduce((acc, currentValue) => acc + currentValue)
        
        result.innerHTML = '';
        result.innerHTML += `<p> Foram adicionados ${total} números</p>`
        result.innerHTML += `<p> A soma de todos os números é igual a ${soma}</p>`
        result.innerHTML += `<p> A média é igual a ${(soma/total.toFixed(2))}</p>`

    }else{
        alert('Adicione valores antes de analizar')
    }
}