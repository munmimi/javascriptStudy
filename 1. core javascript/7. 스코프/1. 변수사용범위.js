var x = 99; // global scope 전역 변수
function foo() {
  var x = "홍길동"; // local scope 지역변수
  console.log(`foo x : ${x}`);
}
console.log(`x : ${x}`); // 99 출력
// 함수는 호출되지 않으면 실행되지 않는다.
foo(); // 함수가 호출될 때 메모리에 var x = '홍길동'이 저장되고 끝나자마자 사라짐.
console.log(`x : ${x}`); // 99 출력

// var x = 99; // global scope 전역 변수
// function foo(){
//   var x = '홍길동' // local scope 지역변수
//   console.log(`foo x : ${x}`);
//   return x; // 반환
// }
// // 함수는 호출되지 않으면 실행되지 않는다.
// var y = foo();
// console.log((`y : ${y}`)); // '홍길동' 출력

// ==================== 중첩 함수
function outer(m) {
  var n = "outer local n";
  var v = "outer local v";
  console.log(n);
  console.log(v);
  console.log(m);

  //헬퍼 함수 - 바깥쪽 함수 전용함수
  function inner() {}
  inner(); //호출 가능
}
outer("outer param m");
inner(); //호출 불가
