var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
if(hora < 12){
    console.log('Bom dia, Felipe!')
    console.log(`Agora são ${hora} horas e ${minutos} minutos`)
}else if(hora < 18){
    console.log('Boa tarde, Felipe!')
    console.log(`Agora são ${hora} horas e ${minutos} minutos`)
} else{
    console.log('Boa noite, Felipe!')
    console.log(`Agora são ${hora} horas e ${minutos} minutos`)
}