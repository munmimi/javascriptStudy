// 다중 매개 변수
function add2(n1, n2) {
  return n1 + n2;
}
function add3(n2, n2, n3) {
  return n1 + n2 + n3;
}
// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달한다.
function addAll(numbers) {
  var total = 0;
  for (var n of numbers) {
    // 배열
    total += n;
  }
  return total;
}

var r1 = addAll([5, 6, 7]); // for문 돌리기 때문에 배열 보내야 함
console.log(r1);

//es6문법 - [spread 문법]
function addAllES6(...numbers) {
  // ... 를 앞에 붙이면 배열 형태가 됨.
  console.log(numbers);
  var total = 0;
  for (var n of numbers) {
    // 배열
    total += n;
  }
  return total;
}

var r2 = addAllES6(1, 2, 3);
console.log(r2);

//function addAllES6 (...numbers, ...others) // No - spread문법은 하나만 사용해야한다
//function addAllES6 (numbers, others) // Ok
//addAllES6([1,2],[3,4]) // Ok - 직접 대괄호 기입하여 끊어주어야 한다.
//function addAllES6 (first, second, ...numbers) // Ok
//addAllES6(1,2,3,4) // Ok - first:1, second:2, ...numbers:[3,4]
//function addAllES6 (first, second, ...numbers, last) // No - spread 문법뒤에 파라미터받을 수 없다.

// 다중 반환 값
// 함수의 반환 값은 언제나 하나
function arithmeticOperate(n1, n2) {
  var addResult = n1 + n2;
  var subResult = n1 - n2;
  return addResult, subResult;
}
var r3 = arithmeticOperate(20, 10);
console.log(`r3: ${r3}`); //subResult만 반환됨

function arithmeticOperateArr(n1, n2) {
  var addResult = n1 + n2;
  var subResult = n1 - n2;
  return [addResult, subResult]; // 배열로 반환
}
var r4 = arithmeticOperateArr(20, 10);
console.log(`addResult: ${r4[0]}`); // 배열로 접근
console.log(`subResult: ${r4[1]}`); // 배열로 접근
//배열로 리턴할 시 배열 순서의 영향을 받는다. - 갯수가 많을 수록 불리

function arithmeticOperateObj(n1, n2) {
  var addResult = n1 + n2;
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  return {
    add: addResult,
    sub: subResult,
    multi: multiResult,
    div: divResult,
  }; // 객체로 반환
}
var r4 = arithmeticOperate(20, 10);
console.log(`addResult: ${r4.add}`); // 객체로 접근
console.log(`subResult: ${r4.sub}`); // 객체로 접근
console.log(`subResult: ${r4.multi}`); // 객체로 접근
console.log(`subResult: ${r4.div}`); // 객체로 접근
// 객체로 리턴하면 순서의 영향을 받지않고 전달 가능.

function arithmeticOperateObj(n1, n2) {
  // var addResult = n1 + n2;
  // var subResult = n1 - n2;
  // var multiResult = n1*n2;
  // var divResult = n1/n2;
  return {
    add: n1 + n2,
    sub: n1 - n2,
    multi: n1 * n2,
    div: n1 / n2,
  }; // 재사용하지 않기 때문에 변수 굳이 필요 없음 클린코드
}
var r5 = arithmeticOperateObj(1, 3).multi; // 3 출력, 객체 접근 방식으로 접근 가능
// return값 또한 type의 영향을 받는다!
