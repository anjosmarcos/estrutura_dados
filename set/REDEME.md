# Set em JavaScript

Um set é uma coleção de elementos únicos que podem ser de qualquer tipo. O set é também uma coleção ordenada de elementos, o que significa que os elementos serão recuperados na mesma ordem em que forma inseridos. 
Um set em JS se comporta do mesmo modo que um conjunto matemático. 

## SET e ARRAY em JavaScript

Um array, como um set, permite adicionar e remover elementos. O set, no entanto, é bem difernete e não se destina a substituir os arrays. 
A maior diferença entre um array e um set é que os arrays permiterm que tenha elementos DUPLICADOS. 

## Propriedaddes e Method

- add: adicionar um elemento
- delete: remover um elemento
- has: buscar um elemento
- size: mostrar tamanho total dos conjunto
- clear: limpar todos os elementos do conjunto

## Propriedades Diferentes do SET

1. Set to array

const arry = [...set]

2. Union of two Sets

const union = new Set([...A, ...B])

3. Intersection of two Sets 

const intersection = new Set([...A].filter(elem => B.has(elem)))

4. Unique values from array

const arr = [1,1,3,7,8,3]
const unique = new Set(arr)

5. Difference of two Sets

const difference = new Set([...A].filter(elem => !B.has(elem)))

6. Superset

const isSuperset = (set, subset) => {
    for (let elem of subset) {
        if(!set.has(elem)){
            return false
        }
    }
    return true
}