const food = '돈가스'
const userName ='스윙스'

console.log(`${food}의 왕 ${userName}`);

// 브라우저 전용함수 : nodejs환경ㅇ에서는 작동불가
// prompt() : 브라우저에서 입력을 할 수 있게 해주는 함수
// confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
// alert(): 브라우저에서 알림창을 띄우는 함수
// var yourName = prompt(`당신의 이름을 입력하세요`)
// alert(`입력한 이름${yourName}`)
//확인,취소
// confirm('혹시 얼마있니? 가진거 다 내놓으렴')
//==> ReferenceError nodejs에서 사용 불가능~

var n1 = prompt('첫 번째 수를 입력하세요')
var n2 = prompt('두 번째 수를 입력하세요')
alert(`두 수의 합 : ${ n1 + n2}`)