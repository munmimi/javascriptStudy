/*
var count = 0;
for (var i = 0; i < 3; i++) {//3회
  for (var j = 0; j < 2; j++) {//2회
    // console.log("메롱"+ count++);
    // console.log("메롱"+ ++count);//++우선하고 메롱
    console.log(`${i},${i}`);
  }
}
*/
/*
console.log('====================================');

//구구단 2단
var level = 2;

console.log(`구구단 ${level}단`);
for (var line = 1; line <= 9; line++){
  console.log(`${level} x ${line} = ${level*line}`);
}
console.log('====================================');
//구구단 3단
var level = 3;

console.log(`구구단 ${level}단`);
for (var line = 1; line <= 9; line++){
  console.log(`${level} x ${line} = ${level*line}`);
}
console.log('====================================');
*/

// 1단 ~ 9단까지 중첩 for문으로 해결-✨
console.log(`구구단 ${level}단`);
for (var level = 1; level <= 9; level++) {
  for (var line = 2; line <= 9; line++) {
    console.log(`${level} x ${line} = ${level * line}`);
  }
}


for (var x=1; x<= 3; x++){
  console.log('🌟');//3번 실행
  for(var y=1; y<=5; y++){
    console.log('🧚🏻‍♀️');//15번 실행
    for(var z=1; z<=2;z++){
      console.log('🔅');//30번 실행
    }
  }
}