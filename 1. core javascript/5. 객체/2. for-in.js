var phone = {
  company: "삼성",
  close: "펄 화이트",
  model: "갤럭시 S24 Ultra",
  price: 1200000,
};
// for in : value가 아닌 key 반복
for (var data in phone) {
  console.log(data); // key 출력
  console.log(typeof data);// string 출력 : key가 문자열로 저장되어 있음을 알 수 있다.
  console.log(phone[data]);// key들이 string type이기 때문에 대괄호 내부 문자열로 입력되도록, value값 출력
}


// 객체 프로퍼티 유무 확인
//phone에 새로운 프로퍼티 추가하고 싶음
console.log('memory' in phone); //false 출력, phone에 memory라는 key가 있는지 확인
console.log('model' in phone); //true 출력
if (!('memory' in phone)){//!가 먼저 연산되기 때문에 우선 연산을 위해 ()삽입, 만약 memory라는 key가 없다면
  phone.memory = '32GB'; // memory key 와 value 추가
}
console.log(phone);

var newKey = 'battery';
if (!(newKey in phone)){
  phone[newKey] = '64hours';//newkey의 변수 값이 문자열 이기 때문에, 문자열 key는 대괄호에 넣어주어야 한다.
}
console.log(phone);