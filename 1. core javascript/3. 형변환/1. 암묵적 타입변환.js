var n1 = 10;
var n2 = "20";
console.log(n1 + n2);
// 숫자 + 문자 => 문자 연산

var n3 = n1 + '';
console.log(typeof n3);
// 숫자 + 빈 문자열 => 문자 연산

var n4 = n2 - n1;
console.log(n4);
// 문자(숫자) - 숫자 || 숫자 - 문자(숫자) => 숫자 연산

var n5 = n1 * n2;
console.log(n5);
// 문자 * 숫자 || 문자 * 문자 => 숫자 연산

// 암묵적 타입변화는 java script의 특성이다.
// 다른 언어는 이렇게 처리 안해줌.

var n6 = 'hello' * 3
console.log(n6);
// 글자 문자 연산 불가

var n7 = +'99'
// 양수 99로 변환


console.log(true + true);
console.log(false + true);
console.log(false + false);
// true = 1, false = 0 으로 변환


// 논리 타입으로 변환 - Truthy, Falsy: 논리가 아닌것을 true&false로 판단하는 것
if (true) console.log('출력됨');
if (false) console.log('출력안됨');
// true => 출력됨, false => 출력안됨

// falsy 5가지 : 0, '', null, undefined, NaN
if (0) console.log('hello - 1');
if ('') console.log('hello - 2');
if (null) console.log('hello - 3');
if (undefined) console.log('hello - 4');
if (NaN) console.log('hello - 5');
// console에 아무것도 찍히지 않음 => false

if (99) console.log('hello - 6');
if (-87.876) console.log('hello - 7');
// 출력됨 => 0이 아닌 모든 숫자 truthy

if('알룡?') console.log('hello - 8');
if(' ') console.log('hello - 9');
if([10,20,30]) console.log('hello - 10');
if([]) console.log('hello - 11');
if({kind :'개'}) console.log('hello - 11');
if({function(){}}) console.log('hello - 11');
// 문자열, space, 배열, 빈 배열, 객체, 함수 => truthy


//////////////////////////////////////////////////////////
for (var i = 1; i <= 10; i++){
  if (n%2 ===0){
    console.log(`${i}는 짝수입니다.`);
  }else{
    console.log(`${i}는 홀수입니다.`);
  }
}
// 와
for (var i = 1; i <= 10; i++){
  if (n%2){
    console.log(`${i}는 홀수입니다.`);
  }else{
    console.log(`${i}는 짝수입니다.`);
  }
}
// 똑같이 출력됨
// if (n%2) => 0 => falsy로 판단 => 즉, 나머지가 있다는 판단(홀수)


// while (999){}
// while ('sdlsdj'){}
// 무한 루프