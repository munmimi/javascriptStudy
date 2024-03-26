// function add (n1,n2){
//   return n1 + n2;
// }
// //반환값 return - 함수 호출부로 함수의 결과 값을 전달해 주는 것

// var result = add(1,3)
// console.log(add(1,3));
// console.log(result);

function add(n1, n2) {
  console.log(`n1: ${n1}, n2: ${n2}`);
  return n1 + n2;
}

// 반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것
var result = add(10, 20) * add(add(1, 4), 2);
console.log(`result: ${result}`);
// 왼쪽 부터, 안쪽부터

// return - 함수의 탈출문, return 아래에 코드 실행되지 않는다.

// return이 없는 함수
function multi (n1,n2){
  console.log(`${n1} X ${n2} = ${n1 * n2}`);
}

multi(3,4);
multi(2,9);
// 산출이 되는 것 처럼 보이지만,
var r1 = multi(3,4);
console.log(`r1: ${r1}`);// undefined 출력
// 결과 값이 return(산출)되지 않았기 때문에 변수에 담을 수 없다.

multi(add(2,3),add(5,6))// OK - 55 출력
var r2 = add(multi(2,4),multi(2,2)) // No - (undefined, undefined)
console.log(`r2: ${r2}`); // NaN 출력
// return되지않은 함수는 변수에 저장할 수 없고, 다른 함수의 매개 값으로도 쓸 수 없다.



// return이 없는 함수에서 return을 break처럼 사용하기
function callName (nickName){
  // 금지어 목록
  var prohibits = ['바보','멍청이','메롱']
  if (prohibits.includes(nickName)){
    console.log('나쁜 말 쓰지 마세요!');
    return;// if에 걸리면 종료되고 아래 코드 실행 안됨.
  }
  console.log(`${nickName}님 안녕하세요.`);

}

console.log('==============================');
// var calling  =callName('뽀로로')//return하지 않았기 때문에 변수에 담으면 안됨!
callName('뽀로로') // 뽀로로님 안녕하세요. 출력
callName('바보') // if 문에서 return;당함 나쁜 말 쓰지 마세요!출력