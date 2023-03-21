let num = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33]
num[17] = 35
num.push(37)
console.log(`O primeiro valor do vetor é o ${num[0]} e o último é o ${num[num.length - 1]} `)
/*for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}*/
for(let cont in num){
    console.log(cont)
}