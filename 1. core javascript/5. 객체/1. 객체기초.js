//객체 생성
//멤버 정보저장
var name = "지은";
var gender = "여성";
var birth = "1996.09";
var age = 27;
var favorite = "개발 공부";

var name = "길동";
var gender = "남성";
var birth = "1995.01";
var age = 29;
var favorite = "헬스";
// 각각 변수로 저장하면 복잡해지고 방대해지고~~
var members = [
  {
    name: "지은",
    gender: "여성",
    birth: "1996.09",
    age: 27,
    favorite: ["개발 공부"],
  },
  {
    name: "길동",
    gender: "남성",
    birth: "1995.01",
    age: 29,
    favorite: ["헬스", "춤"],
  },
];
// 멤버를 객체로 저장하고 객체들을 array형태로 묶어주었다.
console.log(members[0].name);

// key와 값
// key는 원칙적으로 따옴표 없이 기입
// 불가피하게 띄어쓰기가 필요하다면 따옴표를 사용하여 문자열로 기입

// 객체에 저장된 데이터 참조(조회)
//객체를 참조하는 첫 번째 방법
console.log(members[0].age); // 27 출력
console.log(members[1].favorite[0]); // '헬스' 출력 => 객체의 key의 value에 배열을 저장 가능하고 순번으로 열람 가능하다.
// 데이터 타입 유의!!!!!!!!!!!!!!!!!!!
members[0].age++; // number type 가능
members[1].favorite.push("성악"); // 배열 형태에 가능
// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
console.log(members[0].age); // 28 출력
console.log(members[1].favorite); // ["헬스", "춤", "성악"] 출력

members[1].favorite.slice(0).splice(1, 1).reverse(); // slice는 사본을 만들어 추출하는 것(원본에 영향이 가지 않음)
console.log(members[1].favorite); // [ '헬스', '춤', '성악' ] 출력
var copy = members[1].favorite.slice(0).splice(1, 1).reverse(); // 사본 저장
console.log(copy); // [ '춤' ] 출력
//slice나 concat등 사본으로 작업하는 것들은 원본을 수정하지 않음을 명심하고 작업해야한다.

//객체를 참조하는 두 번째 방법
console.log(members[0].name); // 배열의 첫 번째 요소의 name 키 값
console.log(members[0]['name']);// key값을 대괄호로 지정할 경우 따옴표 필수
// console.log(members[0][key]);key가 문자열인 경우


// 프로퍼티 수정
members[0].name = "김지은";
members[0].age = 14;
console.log(members[0].name, members[0].age);// "김지은", 14 출력


// 프로퍼티 동적 추가
members[0].friend = '고유림';
console.log(members[0]); // friend라는 key에 '고유림'이라는 값 추가됨.
//=> 객체.key = value; 을 실행했을 때, 기존에 있던 key라면 수정, 없던 key라면 추가된다.

//프로퍼티 삭제
delete members[0].friend;
console.log(members[0]); // friend라는 키와 값 삭제