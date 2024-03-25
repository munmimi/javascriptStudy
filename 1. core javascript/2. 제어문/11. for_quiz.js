// 1부터 정수값 사이의 약수와 약수갯수 구하기
// var num = +prompt('정수값')
// var message=""
// for (let i = 1; i <= num; i++) {
//    if(num % i === 0){
//     message += i;
//    }
// }
// alert(message)


var targetNum = +prompt('정수값');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력 내용을 저장할 변수
var result = ''

for(var i = 1; i <= targetNum; i++){
  if (targetNum % i === 0){

    result += `${i} \n`
 
    count++;
  }
}
result += `\t 약수의 갯수 ${count}개`
alert(result)