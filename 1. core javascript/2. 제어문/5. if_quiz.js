// 문제1
var a = prompt("정수 A");
var b = prompt("정수 B");
var c = prompt("정수 C");

if (a === b || b === c || a === c) {
  alert("두 개의 값이 같습니다");
} else if (a === b && b === c) {
  alert("세 개 값이 모두 같습니다");
} else {
  alert("모두 다른 값입니다");
}

// 문제2: 정수 2개 입력후 두 값의 차이를 구하라
var d = prompt("정수 D");
var e = prompt("정수 E");
if (d > e) {
  alert(`두 값의 차는 ${d - e}입니다`);
} else if (e > d) {
  alert(`두 값의 차는 ${e - d}입니다`);
} else {
  alert("두 정수의 값이 같습니다");
}
var diff = a > b ? a - b : b - a;

// 문제3: 정수 3개 입력 후 최소값 구하기
var f = prompt("정수 F");
var g = prompt("정수 G");
var h = prompt("정수 H");
if (g > f && h > f) {
  alert(`최소값은 ${f}입니다`);
} else if (f > g && h > g) {
  alert(`최소값은 ${g}입니다`);
} else if (g > h && f > h) {
  alert(`최소값은 ${h}입니다`);
} else {
  alert("최소값이 두 개 이상입니다");
}

var min = f;
if(g<min) min=g;
if(h<min) min=h;

