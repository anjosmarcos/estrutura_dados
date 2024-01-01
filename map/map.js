// MAP em JS

const map = new Map();

console.log(map);

// 02 - outra maneira criar um map
const dados = new Map([
    ['Nome', 'Texto ABCD'],
    ['Tipo', 'Blog'],
    ['Autor', 'Marcos']
]);

console.log(dados);

// Se usar a mesma chaba para adicionar um outro valor
// a um map  várias vezes, ele sempre substituirá o valor
// anterior

dados.set('Autor', 'Alexadre dos Anjos')
console.log(dados);

// Sobre as chaves nos MAP
// As chaves podem ser qualquer tipo, um primitivo ou um objeto
// Essa é uma das maiores diferenas entre o map e os objetos regulares
// onde que as chaves só podem ser uma string

// criar um map
const funMap = new Map();
funMap.set('nome', 'Marcos'); // crinado chave como string
funMap.set(true, 'Eu estudo javascript'); // crinado chave como boolean
funMap.set(900, 'Valor da chave é 900'); // crinado chave como number

let obj = {
    'nome': 'Marcos', 
}
funMap.set(obj, true) // // objeto como uma chave

console.log(funMap);

// Propriedados de MAP
// size: saber quandos elementos
// has(chave): buscar um elemento
// delete(chave): remover um elemento
// clear: remover todos os elementos

console.log(`O tamanho do map é: ${funMap.size}`);
console.log(`Buscar chave {Marcos}: ${funMap.has('Marcos')}`);
console.log(`Buscar chave {Nome}: ${funMap.has('Nome')}`);
console.log(`Remover chave {900}: ${funMap.delete(900)}`);
console.log(`Mostrar dados do map: ${[...funMap]}`);

console.log(`Remover todos os elementos do map`);
funMap.clear();
console.log(`Tamnho do map: ${funMap.size}`);

console.log('********************************')
/// -------------------------------------------------------------
// Iterando sobre um MAP

// KEYS()
// Values()
// Entries()

// Os métodos keys() e values() retornam um MAPINTERADOR
// podemos usar FOR-OF OU FORECH para iterar sobre os valores

const ageMap = new Map([
    ['Marcos', 30],
    ['Alex', 25],
    ['João', 35]
])

// Obter todas as chaves
console.log(ageMap.keys());
// Obter todos os valores
console.log(ageMap.values());
// Obter todas as chaves e valores
console.log(ageMap.entries());


// Usando os Interadores
console.log('================================================================')
// com ForEach
ageMap.forEach((value, key) => {
    console.log(`${key} tem ${value} anos de idade`);
})

console.log('================================================================')
// com for-of
for(const [key, value] of ageMap) {
    console.log(`${key} tem ${value} anos de idade`);
}
console.log('================================================================ '); //================================================================

// -------------------------------------------------------
// Convertendo um Objeto em um MAP

const Pessoa = {
    nome: 'Marcos',
    idade: 30,
    peso: 80,
    altura: 1.80
}

const pessoaMap = new Map(Object.entries(Pessoa));
console.log(`Pessoa Objeto:`);
console.log(Pessoa)
console.log(`Pessoa Map: ${[...pessoaMap.entries()]}`);
console.log('================================================================ '); //================================================================

// Convertendo um MAP em um objeto 

// usando o fromEntries
const pessoaObj = Object.fromEntries(pessoaMap)
console.log(`Convertendo Pessoa Map em Pessoa Objeto`);
console.log(pessoaObj)