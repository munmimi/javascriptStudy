let x;
console.log(x);

// const - 상수 선언, 변경 불가능한 데이터
// const y; // 선언만 해놓고 나중에 값 넣는 것 불가능하기 때문에 에러.
console.log(y); // syntaxError: 문법 에러, 초기화가 없다.
const y = 1;

y=1;
console.log(y); // TypeError 값을 수정할 수 없다.

const COLOR_GREEN ='#0f0'
/*
 $div.style.background = COLOR_GREEN
*/

// 상수는 객체의 불변성을 유지할 수 있다.
const kim = {
  name: '김철수',
  age : 30,
};
kim.age = 31;
kim.name = '마이클 킴'//프로퍼티 수정 가능

kim = {
  name: '김철수',
  age : 30,
}// 값이 같다 하더라도 이런식의 재선언 불가능.

const arr = {
  0:'z',
  1:'dd',
  2:'ddf',
  length:3
};
arr.length