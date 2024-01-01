// Como converter um set em um array em JS

const houseNos = new Set([360,567,101])
console.log(`SET`)
console.log(houseNos)

console.log('****')
const arr = [...houseNos]
console.log(`ARRAY`)
console.log(arr)