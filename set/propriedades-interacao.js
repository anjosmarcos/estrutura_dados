// Interacao SET

const first = new Set([0,1,2,3,4,5,6])
const second = new Set([2,3,4,5,6])

console.log('********************************')
console.log(`Conjunto A: [${[...first]}]`)
console.log(`Conjunto B: [${[...second]}]`)
console.log('********************************')

// Union operations
const union = new Set(
    [...first].concat(...second)
)
console.log(`Union: ${[...union]}`)
console.log('********************************')

// Interacao 
const intersection = new Set(
    [...first].filter(elem => second.has(elem)) 
)
console.log(`Interacao: ${[...intersection]}`)
console.log('********************************')

// Diferençao
const difference = new Set([...first].filter(elem => !second.has(elem)))
console.log(`Diferenção: ${[...difference]}`)
console.log('********************************')

// Subconjunto ou Superset
const isSuperset = (set, subset) => {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

console.log(`Conjunto A é um subconjunto de B? ${isSuperset(first, second)}`)
console.log('********************************')
console.log(`Conjunto B é um subconjunto de A? ${isSuperset(second, first)}`)   