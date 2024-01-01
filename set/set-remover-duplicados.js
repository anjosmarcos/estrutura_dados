// Valores únicos de um array utilizando o set em JavaScript

const numbes = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]

console.log(`numbes: ${numbes }`)
console.log(numbes.length)


const uniqueNumbers = new Set(numbes)
console.log('Removendo duplicados')
console.log(uniqueNumbers)
console.log(uniqueNumbers.size)
