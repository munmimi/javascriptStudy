function min2 (n1, n2){
 if (n1>n2){
  return n2;
 } else if (n1<n2){
  return n1
 } else{
  console.log('같은 숫자입니다.');
 }
}

//result에는 56가 리턴되어야 함.
var result1 = min2(134, 56);
console.log(result1);
function min3 (n1,n2,n3){
  if (n2 > n1 && n3>n1){
    return n1;
  } else if (n1>n2 && n3>n2){
    return n2;
  } else if (n1>n3 && n2>n3){
    return n3;
  } else{
    console.log('같은 숫자가 있습니다');
  }
}
// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
var result2 = min3(120, 50, 99);
console.log(result2);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴, 
// 단, 0은 짝수취급
function isEven(n){
  if (n===0 || n%2 === 0){
    return true;
  } else {
    return false;
  }
}
var result3 = isEven(2);
console.log(result3);

