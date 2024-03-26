// parameter (매개 변수)

// x 부터 y 까지의 누적합을 구해야 함
// 1 ~ 10

function calcRangeTotal(x, y) {
  var total = 0;
  for (var i = x; i <= y; i++) {
    total += i;
  }
  return total;
}

console.log(calcRangeTotal(4, 6)); // 15 출력

// 매개변수의 기본값
function sayHello(language="한국어") {
  console.log(language);
  // ES5
  // language = language || '한국어'
  // 좌항 language 가 falsy하기 때문에 우항의 '한국어'가 truethy가 저장됨.

  switch (language) {
    case "한국어":
      console.log('안녕');
      break;
    case "영어":
      console.log('하이');
      break;
    case "중국어":
      console.log('따자하오');
      break;
    case "일본어":
      console.log('곤니찌와');
      break;
    default:
      console.log('기본');
  }
}
sayHello('일본어')
sayHello() //변수를 전달하지 않으면, language 라는 변수는 undefined


//매개변수가 없는 함수
function selectRandomPet (){
  var pets = ['강아지','고양이','새','고라니','노루']
  
  return pets[1]
}
console.log(selectRandomPet ()); // 고양이 출력
console.log(selectRandomPet ()); // 고양이 출력
console.log(selectRandomPet ()); // 고양이 출력

// 함수 내에서 랜덤 설정, 랜덤 출력
function selectRandomPet2 (){
  var pets = ['강아지','고양이','새','고라니','노루'];
  var rn = Math.floor(Math.random() * pets.length);
  return pets[rn]
}
console.log(selectRandomPet2 ());
console.log(selectRandomPet2 ());
console.log(selectRandomPet2 ());