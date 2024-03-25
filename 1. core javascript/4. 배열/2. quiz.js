var scores = [83, 99, 100, 57]
// 총 점, 평균 추출
var total = 0;
// 토탈 초기 숫자 안넣어 줘서 안된거임 ㅠㅠ

for (i=0; i<scores.length; i++){
  console.log(scores[i]);
  total += scores[i]
}
var average = total/scores.length

console.log(`총 점: ${total} 평균: ${average}`);