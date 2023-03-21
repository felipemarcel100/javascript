var pessoa = {
nome: 'Felipe',
sobrenome: 'Vilela',
idade: 32,
sexo: 'M',
altura: 1.78,
peso: 65,
imc(peso, altura){
    return pessoa.peso / (pessoa.altura*pessoa.altura)
},
nacionalidade: 'Brasileiro',
endereco: {
    rua: 'Luís Carlos dos Santos',
    numero: 492,
    bairro: 'Jardim Tropical',
    cidade: 'Jales',
    estado: 'SP'
    },
    cor: 'pardo',
    profissão: 'Garçom',
    escolaridade: 'Ensino Médio Completo'
}