// 1. 변수의 중복 선언을 암묵적 허용
var x = 10;
var x = 'ddd';
console.log(x);//'ddd' 출력

// 2. 블록 레벨 스코프를 지원하지 않음
let i = '메롱';

for (let i = 0; i < 5; i++) {
  console.log(`for - i: ${i}`);
}// let으로 선언 시 for문이 끝나면 다시 전역변수로 돌아온다

console.log(`global-i : ${i}`);

// 3. 호이스팅 문제 : 선언위치와 관계없이 참조가능

hobby = '댄스'
var hobby; // 변수선언 순서가 잘못 되었음에도 불구하고 출력이 됨.
console.log(hobby);
hobby2 = '댄스'
let hobby2; // can not access hobby2
console.log(hobby2);