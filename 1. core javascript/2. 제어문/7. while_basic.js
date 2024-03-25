// var n = 10;
// console.log(`${n}!!`);
// n--;
// console.log(`${n}!!`);
// n--;
// console.log(`${n}!!`);
// n--;

var n = 10;
while (n > 0) {
  console.log(`${n}!!`);
  n--;
}

console.log("======================");


var begin = 8,
  end = 3,
  step = 1;
var m = begin;

while (m >= end) {
  console.log(`${m}!!`);
  m -= step;
}

console.log("======================");


var v = 1;
while (v <= 9) {
  console.log(`2 x ${v} = ${2 * v}`);
  v++;
}

console.log("======================");


var s = 10; //begin
while (s <= 34) {
  if (s % 2 === 1) {
    console.log(s);
  }
  s++;
}


console.log("======================");


// 1~ 10 까지의 누적합
var total = 0;
var i = 1;

while(i<=10){
  total +=  i;
  i++;
}
console.log(total);