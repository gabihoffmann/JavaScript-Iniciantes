
function contar(){
    var res = document.querySelector('div#res');
    res.innerHTML = ``;

    var txtini = document.querySelector('input#txtini');
    var txtfim = document.querySelector('input#txtfim');
    var txtpasso = document.querySelector('input#txtpasso');

    var ini = Number(txtini.value);
    var fim = Number(txtfim.value);
    var passo = Number(txtpasso.value);


    if(txtini.value == "" || txtfim.value == "" || txtpasso.value == ""){
        alert('[ERRO] Faltam os dados');
        res.innerHTML = `Impossivel contar...`
    }else {
        res.innerHTML = 'Contando: <br>';

        if(ini < fim){
            //contagem crescente
            for(let c = ini; c <= fim ; c += passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(let c = ini; c >= fim ; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }

    res.innerHTML +=`\u{1F3F3}`
}