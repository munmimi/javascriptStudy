// 콜백함수 - 함수의 파라미터로 함수내부에 함수를 받음

// 계산하는 함수
// function operate(n1, n2) {
//   console.log("계산기 작동");
//   // 익명 함수 파라미터로 받아서 연산 
//   const result = n1 + n2;
//   return result;
// }
// 계산식을 계속 바꿔서 사용할 수는 없나?

// 코드를 파라미터화 하고 싶음
function operate(param) {
  console.log(param);
  console.log("계산기 작동");
  // 익명 함수 파라미터로 받아서 연산 
  const result = param(10, 20);
  return result;
}
// 파라미터에 숫자, 문자열, 논리, 객체, 배열, 다른 변수, 함수 또한 가능

function add(n1, n2) {
  return n1 + n2;
}
operate(add(3, 4)); // 7을 전달
operate(add); // 함수를 전달 가능

//함수 호출 - 익명의 함수 전달
operate(function (n1, n1) {
  return n1 + n2;
}); // Ok
