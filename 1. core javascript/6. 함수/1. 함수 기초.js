//함수 정의 함수명 관례 동사형으로
function sayHello(userName){
 console.log(`${userName}님 안녕하세요`);
 console.log(`오늘도 즐거운 하루 되세요!`);
}

sayHello('둘리');
sayHello('루피');
sayHello('뽀로로');
// 둘리님 안녕하세요
// 오늘도 즐거운 하루 되세요!
// 루피님 안녕하세요
// 오늘도 즐거운 하루 되세요!
// 뽀로로님 안녕하세요
// 오늘도 즐거운 하루 되세요!

function makeLine (){
  console.log('====================================');
}
makeLine()
sayHello('둘리');
makeLine()

sayHello('루피');
makeLine()

sayHello('뽀로로');
makeLine()

// 나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265

function calcAreaCircle (r){
  return PI * r ** 2;
}

// 반지름이 5인 원의 넓이
var circle1 = calcAreaCircle(5);
console.log(circle1);

//게시글을 삭제하는 함수

function removeBoardArticle(){

}