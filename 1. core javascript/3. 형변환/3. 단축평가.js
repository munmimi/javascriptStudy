true && true; //true
true && false; //false
false && true; //false
false && false; //false
// 왼쪽이 true 면 오른쪽의 boolean에 따라 결정
// 왼쪽이 false 면 무조건 false

true || true; //true
true || false; //true
false || true; //true
false || false; //false
// 왼쪽이 true 면 무조건 true
// 왼쪽이 false 면 오른쪽의 boolean에 따라 결정

// OR연산: 첫번째 truthy를 반환
console.log("hello" || "bye");
// true || true
// 첫번째 'hello' 반환
console.log(null || "안녕");
// false || true
// 두번째 '안녕' 반환

// AND연산: 첫번째 falsy를 반환
console.log("hello" && "bye");
// true && true => 모두 true일 시 마지막 true를 반환
// 두번째 'bye' 반환
console.log(0 && "안녕");
// false && true
// 첫번째 '0' 반환

// 조건문
if( 조건 ){
  console.log('blah blah 1');
}
조건 && console.log('blah blah 2');
// 두 가지 방법이 같은 값을 출력한다.