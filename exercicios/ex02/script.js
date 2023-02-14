
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtAno')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Dados inseridos são inválidos')
    } else {
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade>0 && idade <=2){
                img.setAttribute('src', 'imagens/menino2.png')
            } else if(idade <=7){
                //criancinha
                img.setAttribute('src', 'imagens/menino5.png')
            } else if(idade <= 12){
                //menino
                img.setAttribute('src','imagens/menino10.png')
            } else if(idade <=18){
                //adolescente
                img.setAttribute('src', 'imagens/homem15.png')
            }else if(idade <= 30){
                // adulto 20 - 30
                img.setAttribute('src', 'imagens/homem25.png')
            }
            else if(idade <= 40){
                // adulto 30-40
                img.setAttribute('src', 'imagens/homem35.png')
            }
            else if(idade <= 65) {
                //adulto 40 -65
                img.setAttribute('src', 'imagens/homem55.png')
            }else{
                //adulto mais de 65
                img.setAttribute('src', 'imagens/homem65.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade>0 && idade <=2){
                img.setAttribute('src', 'imagens/menina2.png')
            } else if(idade <=7){
                img.setAttribute('src','imagens/menina5.png')
            } else if(idade <= 12){
                img.setAttribute('src', 'imagens/menina10.png')
            }else if(idade <=18){
                img.setAttribute('src', 'imagens/mulher15.png')
            }else if(idade <= 30){
                img.setAttribute('src', 'imagens/mulher25.png')
            }else if(idade <= 40){
                img.setAttribute('src', 'imagens/mulher35.png')
            }else if(idade <= 65) {
                //adulta 40 -65
                img.setAttribute('src', 'imagens/mulher55.png')
            }else{
                //adulta mais de 65
                img.setAttribute('src', 'imagens/mulher65.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}