var score = 70;
console.log(`점수 ${score}점`);

if(score>=60){
  console.log('합격하셨어요~~ 짝짝짝')
  console.log('수고링')
}

// 랜덤 정수 생성하기: Math.random
// 1이상 10이하의 랜덤 정수 생성
// Math.random()               0.0 <=  출력될 값  < 1.0 소수점
// Math.random() * 10          0.0 <=  출력될 값  < 10.0 정수
// Math.random() * 10 + 1      1.0 <=  출력될 값  < 11.0 정수
// Math.floor() : 소수점이하 버림
// Math.floor(9.888) => 9


// 랜덤 범위 정수값 공식
// x이상 y이하의 랜덤정수 생성
// Math.floor(Math.random() * (y-x+1)) + x
// Math.floor(Math.random() * (142 - 117 + 1)) + 117    //((큰수 - 작은수 + 1) + 작은수)
// Math.floor(Math.random() * (26)) + 117
var randomNumber = Math.random() * 10
var randomNumberPure = Math.floor(randomNumber)
console.log(`랜덤값: ${randomNumber}`)
console.log(`랜덤값 정수: ${randomNumberPure}`)

var score = Math.floor(Math.random() * 101)
console.log(`점수 ${score}점`)
if(score >= 60){
  console.log('60점 이상이세용');
}else{
  console.log('60점 이하이세용');
}
