function parImpar(num){
    if(num%2 === 0){
        return 'Número par'
    }else{
        return 'Número Ímpar'
    }
}
//console.log(parImpar(0))
function soma(num1 = 0, num2 = 0){
    return num1+num2
}
//console.log(soma(2))
let dobro = function dobro(n){
    return n*2
}
//console.log(dobro(10))
function fatorial(numero){
    var resultado = 1
    for(var cont = numero; cont > 1; cont--){
        resultado *=  cont
        //resultado = (resultado * cont)
        console.log(resultado)
    }
    return resultado
}
console.log(fatorial(5))