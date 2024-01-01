// 01
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (var i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

console.log('**********');
// 02
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i <= 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (var i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}
// ---------------------------------------------
console.log('**********');


