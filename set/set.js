const set = new Set();
console.log(set);

// Exemplo
const saladaSet = new Set();
saladaSet.add('maca')
saladaSet.add('banana')
saladaSet.add('abacate')
saladaSet.add('pitaia')

console.log(saladaSet);
console.log(`Qtd de elementos: ${saladaSet.size}`);

// ADD um uma fruta repetida
console.log(`++ ADD abacate novamente`)
saladaSet.add('abacate')

console.log(saladaSet);
console.log(`Qtd de elementos: ${saladaSet.size}`);

// Buscando uma fruta
console.log(`-- Buscando abacate`)
console.log(saladaSet.has('abacate'));
console.log(`-- Buscando uva`)
console.log(saladaSet.has('uva'));

// Remover todos os elementos
console.log(`-- Remover todos os elementos`)
saladaSet.clear();

console.log(saladaSet);
console.log(`Qtd de elementos: ${saladaSet.size}`);

