function add(n1, n2) {
  return n1 + n2;
}

const r1 = add(10, 30);
console.log(`r1: ${r1}`);
const plus = add;
console.log(plus);
console.log(typeof plus); //function 출력
//함수도 하나의 데이터이고 값이다.
const r2 = plus(5, 8);
console.log(`r2: ${r2}`);

const log = console.log; //log변수에 함수를 담아서 사용가능
log("zzz");

/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */

// function multiply(n1,n2) {

// }// 함수선언문(정의문) ,영역 에는 ;d 안붙임
//if while ; 안붙임
//객체 {}; ;붙임
// function (n1,n2) {
//   return n1 * n2
// };익명함수 생성

// 익명 함수: 함수를 값(리터럴)으로 본 경우
const multiply = function (n1, n2) {
  return n1 * n2;
}; // 함수를 마치 변수처럼 생성할 수 있다., 함수표현식, 함수표현식은 호출부 하단에 작성하면 사용할 수 없다.

const r3 = multiply(3, 4);
console.log(12);

// 함수표현식은 위에서 아래로의 흐름을 정확하게 계산하는 상황에서 적합.

const array = [
  10,
  "text",
  true,
  [],
  {},
  multiply,
  function () {
    console.log("익명의 함수");
  },
]; // 함수도 배열에 삽입 가능.

const r4 = array[5];
console.log(r4); // [Function: multiply 출력
console.log(r4(10, 10)); // 100 출력

console.log("==================================");
//객체에 함수 사용 가능~
const dog = {
  name: "초코",
  age: 3,
  favorite: ["산책", "낮잠"],
  play: function (tool) {
    console.log(`${this.name} 강아지는 ${tool} 장난감으로 놀아요`);
  }, //객체에 포함된 함수 : method 메서드(객체 전용 함수, 객체의 기능을 표현)
};
dog.play("인형"); // Ok
// play("인형"); // No

const cat = {
  name: "용이",
  sleep: function () {
    console.log("zzz");
  },
};
dog.sleep(); // No
cat.sleep(); // Ok
