var month = []
var fistWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]

var avgTempWeek3 = [13, 21.2, 19.5, 17, 33.8, 25, 33]
var avgTempWeek4 = [13, 21.2, 19.5, 17, 33.8, 25, 33]

fistWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [fistWeeks, lastWeeks]
console.log(month);
console.log('**********')

for(let i = 0; i < month.length; i++){
    for(let j = 0; j < month[i].length; j++){
        for(let k = 0; k < month[i][j].length; k++){
            console.log(`month[${i}][${j}][${k}] = ${month[i][j][k]}`)
        }
    }
}

// usando com for e OF
// usando o entries() retorna um interador que conté chave/valor para cada elemento do array
console.log('**********')
for (let [i, month_i] of month.entries()) { // month.entries() retorna um interador que conté chave/valor para cada elemento do array
    for (let [j, month_j] of month_i.entries()) { // month_i.entries() retorna um interador que conté chave/valor para cada elemento do array
        for (let [k, value] of month_j.entries()) { // month_j.entries() retorna um interador que conté chave/valor para cada elemento do array
            console.log(`month[${i}][${j}][${k}] = ${value}`); // month_j.entries() retorna um interador que conté chave/valor para cada elemento do array
        } // month_j.entries() retorna um interador que conté chave/valor para cada elemento do array
    }
}