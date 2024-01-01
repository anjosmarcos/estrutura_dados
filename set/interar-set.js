// Exemple como interar sobre um SET em JS

// O SET tem um método chamado values() que retorna um 
// SetInterator para obter os valores

const houseNos = new Set([360,567,101])

// O SET tem um método chamado values() que retorna
console.log(houseNos.values())

console.log(houseNos.keys())

// Com o MAP entries() retorna um interador para recuparar
// par de chaves-valor. Como não temos chaves para um set, entao
// entries() retorna um par de valor-valor
console.log(houseNos.entries())

// Enumerar sobre um set em JS

console.log(`Usando Laço percorrer o SET`)
houseNos.forEach((valor) => {
    console.log(valor)
})
console.log('---------------------');

