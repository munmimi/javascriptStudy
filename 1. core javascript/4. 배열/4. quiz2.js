//'그만' 입력시 알러트
//입력한 숫자 목록
//입력한 숫자 총합
var total = 0;
var arr = [];

while (true) {
  var num = prompt(
    "숫자를 입력해 주세요. 그만하고 싶다면 '그만'이라고 입력해 주세요"
  );
 
  if (num === "그만") {
    break;
  } else {
    arr.push(+num);
    total += +num;
  }
  if (arr.length >= 6 ){
    break;
  }
}
alert(`입력한 숫자 목록: [${arr}] 입력한 숫자 총합: ${total}`);
