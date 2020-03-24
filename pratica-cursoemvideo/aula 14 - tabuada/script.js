function calcular(){
    //var res = document.getElementById('res');
    var tab = document.querySelector('select#seltab');
    var txtnum = document.querySelector('input#txtnum');
        
    if(txtnum.value != ""){
            let num = Number(txtnum.value);
            let c = 1;

            tab.innerHTML = ' ';
            
            while(c <= 10){
                let item = document.createElement('option');
                item.text = `${num} x ${c} = ${num*c}`;
                item.value = `tab${c}`
                tab.appendChild(item);
                c++;
            }

        }else{
            window.alert(`O número está vazio, digite um número`);
        }

}