

function calcular(){
    var mult = Number(document.getElementById('mult').value)
    var res = document.getElementById('res')
    var cont = 0
    //window.alert(`${mult}`)
    
    while(cont <= 10){
        res.innerHTML += `${mult} x ${cont} = ${mult*cont} <br>`
        cont++
    }
    
}