
let txtnum = document.querySelector("input#txtnum");
let lista = document.querySelector("select#selnum");
let res = document.querySelector("div#res");
var vetor = []

function adicionar(){
    
    if(testarvalor(txtnum) && testevetor(Number(txtnum.value))){
        vetor.push(Number(txtnum.value));
        let item = document.createElement('option');
        item.text = `Adicionado ${txtnum.value}`;
        lista.appendChild(item);
    }
    
    txtnum.value = '';
    txtnum.focus();
    res.innerHTML = ""
}

function finalizar(){
   if(vetor.length == 0){
       alert('Adicione um valor antes de finalizar')
   }else{
       let quant = vetor.length


       let maior = vetor[0]
       for (aux in vetor) {
           if (vetor[aux] > maior) {
               maior = vetor[aux];
           }
       }

       let menor = vetor[0]
       for(aux in vetor){
           if(vetor[aux] < menor){
               menor = vetor[aux]; 
           }
       }

       let total = 0
       for(aux in vetor){
           total += vetor[aux];
       }

       res.innerHTML = ""
       res.innerHTML += `<p>Ao todo foram cadastrados ${quant} números</p>`
       res.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`
       res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
       res.innerHTML += `<p>A soma de todos os valores é ${total}</p>`
       res.innerHTML += `<p>A média dos valores é ${total/vetor.length}</p>`
   }
}


function testarvalor(valor){
    if(valor.value == ""){
        alert('[ERRO] Insira um valor');
        return false
    }else if(valor.value < 1 || valor.value > 100){
        alert('[ERRO] Valor fora do limite, insira outro número')
        return false
    }else{
        return true
    }
}

function testevetor(valor){
    if(vetor.indexOf(valor) != -1){
        alert(`o valor ${valor} já foi adicionado`)
        return false
    }else{
        return true
    }
}
