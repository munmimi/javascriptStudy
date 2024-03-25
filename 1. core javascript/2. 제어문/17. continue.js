for (var i = 1; i<= 10; i++){
  if(i % 2 ===0) break;//skip
    console.log(i);
  
}
while(true){
  var n = +prompt('숫자를 입력');
  if(n===0) break;//브레이크 걸리면 바로 while 문 바깥으로 나간다
  else if (n===1)continue;//아래 스킵, 다시 while 반복문 반복
  alert('메롱메롱');
}
alert('끝났지요');
