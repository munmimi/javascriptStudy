// 1. 입력받은 값으로 누적합!!!

var begin = +prompt("첫번째 숫자!");
var end = +prompt("마지막 숫자!");
var step = begin + 1;

while (step <= end) {
  begin += step;
  step++;
}
alert(begin);

// 2. 숫자 입력 값까지 +-교차 입력
// 양의 점수 입력!

var stopNum = +prompt("양의 점수 입력!");
var i = 1;
var message = "";
while(i <= stopNum){
  if (i % 2 === 0){
    message += '+'
  } else {
    message += '-';
  }
  i++;
}
alert(message);