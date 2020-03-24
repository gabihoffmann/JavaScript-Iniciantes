function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');

    var data = new Date()
    var hora = data.getHours();

    msg.innerHTML += `Agora são ${hora} horas.`;

    if (hora > 0 && hora < 12){
        //Bom dia
        img.src = 'images/manha.png';
        document.body.style.background = `#F5D4AF`

    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'images/tarde.png';
        document.body.style.background = `#978977`;

    }else{
        img.src = 'images/noite.png';
        document.body.style.background = `#2D688B`;
    }

}
