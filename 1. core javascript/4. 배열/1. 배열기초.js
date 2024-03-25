// var food1 = '짬뽕, 탕수육, 자몽'
// => 하나만 꺼낼 수 없음

// var food1 = '짬뽕'
// var food2 = '탕수육'
// var food3 = '자몽'
// var all = `${food1}, ${food2}, ${food3}`
// => 갯수가 많아지면 사용하기 어려움

// 배열 : 변수 하나에 여러개의 데이터를 묶어서 사용
// 배열의 index 0부터 시작
var arr = [0, 10, 20, 30, 40];
console.log(typeof arr); //object(객체): 복합 데이터(여러개의 데이터)

console.log(arr[1]); // 1번째인  10출력
console.log(arr[2] ** 2); // 400 출력
console.log(arr[2]); // 20 출력
console.log((arr[2] = arr[2] ** 2)); // 다시 저장
console.log(arr[2]); // 400 출력
arr[3]++;
console.log(arr);

// 배열 데이터 수 확인
console.log(arr.length); // 5 출력
console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length - 1]}`);

// 배열 데이터 순회 (전체참조: travis)
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// ...

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for ~ of 반복문 (배열 전용 반복문)
// => index를 반환하지 않음 (전체 반복)

var weekDays = ["월", "화", "수", "목", "금", "토", "일"];

for (var day of weekDays) {
  console.log(`${day}요일`); //'월' 출력
}

for (var n of [1, 2, 3, 4]) {
} //ok
for (var n of 99) {
} //nope: 오로지 배열에만 for of 사용

//배열 생성 관례: 이름 복수형, -List 어미
var fruit = []; //nope
var fruits = []; //ok
var fruitList = []; //ok
var fruitArray = []; //ok


var tags = [
  '<li>리스트</li>',
  '<a href="#none">링크</a>',
  '<h1>제목</h1>',
];
// 가독성 위해 세로로 작성, 마지막 데이터 콤마(줄복사 편리성 위해)