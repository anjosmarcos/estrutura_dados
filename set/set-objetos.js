// SET e Objetos em JavaScript

// O SET é uma estrutura de dados que armazena valores únicos de qualquer tipo

// Criar uma pessoa
const pessoa = {
    'name': 'Marcos',
    'idade': 32
}

// Criar um set e adicionar um objeto a ele
const pSet = new Set()
pSet.add(pessoa)
console.log(pSet)

pessoa.name = 'Alexandre'
pessoa.idade = 20
pSet.add(pessoa)
console.log(pSet)