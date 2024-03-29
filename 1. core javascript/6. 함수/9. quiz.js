/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
// function calcNumbersTotalAndAverage(...numbers) {
//   var add = 0; // 누적합할 때 제발 초기설정 해주삼 ~~~~~
//   var average;

//   for (var n of numbers) {
//     add += n;
//   }
//   average = add / numbers.length;
  
//   return {
//     total: add,
//     avg: average,
//   };
// }

// 함수 리팩토링
function calcNumbersTotalAndAverage(...numbers) {
  var total = 0; // 누적합할 때 제발 초기설정 해주삼 ~~~~~
  for (var n of numbers) {
    total += n;
  }
  return {
    total,
    avg: total / numbers.length,
  };
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
