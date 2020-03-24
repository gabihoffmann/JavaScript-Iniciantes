function verificar(){
    var data = new Date();
    var ano_atual = data.getFullYear(); //pegar o ano com os 4 digitos

    var form_ano = document.getElementById("txtano");
    var res = document.querySelector('div#res');

    if (form_ano.value == 0 || Number(form_ano.value) > ano_atual){
        alert("[ERRO] Verifique os dados e tente novamente! ")
    }else{
        var form_sex = document.getElementsByName('radsexo');
        var idade = ano_atual - Number(form_ano.value);

        var image = document.createElement('img')
        image.setAttribute('id' , 'foto')
            
        var gen_str = "";
        
        if (form_sex[0].checked) {
            gen_str = "Mulher";
            if(idade >=0 && idade <= 10){
                image.setAttribute('src', 'images/crianca-menina.png')
            }else if(idade <= 21){
                image.setAttribute('src', 'images/jovem-mulher.png')
            }else if (idade <= 50) {
                image.setAttribute('src', 'images/adulto-mulher.png')
            }else{
                image.setAttribute('src', 'images/idoso-mulher.png')
            }
            
            
        } else if(form_sex[1].checked){
            gen_str = "Homem";
            if(idade >=0 && idade <= 10){
                image.setAttribute('src', 'images/crianca-menino.png')
            }else if(idade <= 21){
                image.setAttribute('src', 'images/jovem-homem.png')

            }else if (idade <= 50) {
                image.setAttribute('src', 'images/adulto-homem.png')
            }else{
                image.setAttribute('src', 'images/idoso-homem.png')
            }

            
        }

        
    

        
        res.innerHTML = `Detectamos ${gen_str} de ${idade} anos`;
        res.appendChild(image);
    }


   

    
}