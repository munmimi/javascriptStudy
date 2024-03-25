//문자열을 명시적으로 숫자로 변환
var x = "30",
  y = "40";

// 1. Number()
var result = Number(x) + Number(y);
console.log(result);
// 2. parseInt()
var result2 = parseInt(x) + parseInt(y);
console.log(result2);
// 문자를 숫자로 바꿀 때 정수로 바꾼다.
// parseDouble() => 소수점도 변환

// 3. +
var result3 = +x + +y;
console.log(result3);


// 숫자를 문자열로 변환
//1. '' + 숫자
var m = '' + 10 + 20;
console.log(m);

// true, false를 숫자로 변환 또한 같은 방식
var f1 = +false;//숫자
var f2 = ''+false;//문자열
console.log(f1,f2);

// 논리가 아닌 것을 논리로 변환
console.log(Boolean('hello'));//truethy => true
console.log(Boolean(null));//falsy => false
console.log(!!999);
console.log(!!undefined);
//!! => 논리로 변환 연산자
//!만 붙여도 논리로 변환되지만 !는 논리 반전 => 999는 truethy임에도 false로 출력됨, 고로 !!로 두번 반전 시켜줌
