var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()
var data = document.getElementById('data')

function contar(){
var tN1 = document.getElementById('txtN1')
var tN2 = document.getElementById('txtN2')
var tN3 = document.getElementById('txtN3')
var res = document.getElementById('res')

if(tN1.value.length == 0 || tN2.value.length == 0 || tN3.value.length == 0){
    window.alert("Preencha todos os campos")
} else{
    var inicio = Number(tN1.value)
    var limite = Number(tN2.value)
    var passo = Number(tN3.value)
    var cont = inicio

    //contagem crescente
    if(inicio < limite){
        while(cont <= limite){
        res.innerHTML += ` ${cont}`
        cont += passo
        res.innerHTML += `\u{27A1}`
        }
    }else {//contagem decrescente
        while(cont >= limite){
            res.innerHTML += ` ${cont}`
            cont -= passo
        }
    }
    
}
}

data.innerHTML = `${hora} : ${min} : ${sec}`
