function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sauda = window.document.getElementById('saudacao')
    var data = new Date()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} hora e ${min} minutos` 
    if (hora >= 0 && hora < 12){
        sauda.innerHTML = 'Bom dia'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E7C6B0'
    } else if (hora >= 12 && hora < 18){
        sauda.innerHTML = 'Boa tarde'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#B3AB2B'
    } else{
        sauda.innerHTML = 'Boa noite'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#67757E'
    }
}