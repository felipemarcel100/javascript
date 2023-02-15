var multi = Number(document.getElementById('mult').value)
var res = document.getElementById('res')
var cont = 0

function calcular(){
    window.alert(`${multi}`)
    
    while(cont <= 10){
        res.innerHTML += `${multi} `
        cont++
    }
}