var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()
var data = document.getElementById('data')

function contar(){
var tN1 = Number(document.getElementById('txtN1').value)
var tN2 = Number(document.getElementById('txtN2').value)
var tN3 = Number(document.getElementById('txtN3').value)
var res = document.getElementById('res')

if(tN1.length == 0 || tN2.length == 0 || tN3.length == 0){
    window.alert("Preencha todos os campos")
} else{
    var cont = tN1
    if(tN1 < tN2){  //contagem crescente
        while(cont <= tN2){
        res.innerHTML += `${cont}`
        cont += tN3
        res.innerHTML += `\u{27A1}`
        }
    }else { //contagem decrescente
        while(cont >= tN2){
            res.innerHTML += ` ${cont}`
            cont -= tN3
            res.innerHTML += `\u{27A1}`
        }
    }
}
}

data.innerHTML = `${hora} : ${min} : ${sec}`
