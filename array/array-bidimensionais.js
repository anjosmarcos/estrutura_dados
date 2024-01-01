var avgTempWeek = [];
var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek);
console.log('**********');

for (let i = 0; i < avgTempWeek.length; i++) {
    for (let j = 0; j < avgTempWeek[i].length; j++) {
        console.log(avgTempWeek[i][j]);
    }
}

console.log('**********');

for (let [i, week] of avgTempWeek.entries()) {
    for (let [j, temp] of week.entries()) {
        console.log(`avgTempWeek[${i}][${j}] = ${temp}`);
    }
}