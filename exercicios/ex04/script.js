

function calcular(){
    let num = Number(document.getElementById('mult').value)
    let tab = document.getElementById('seltab')

    if(num.length == 0){
        window.alert('Digite um número válido')
    } else{
        let cont = 0
        tab.innerHTML = ''
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            //item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}
