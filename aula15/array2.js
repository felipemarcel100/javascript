//Listar todos os valores dentro de um array

let valores = [1, 8, 2, 6, 4, 7, 9, 3, 5] //cria uma variável array com 7 elementos

valores[3] = 6 // cria um novo elemento em valores na posição(chave) 3 com o valor 6
valores.push(7) //cria um novo elemento na última posição do array com o valor 7
valores.sort() // organiza todos os elementos de forma crescente dentro do array

for(let pos in valores){
    console.log(`A posição [${pos}] tem o valor ${valores[pos]}`)
}