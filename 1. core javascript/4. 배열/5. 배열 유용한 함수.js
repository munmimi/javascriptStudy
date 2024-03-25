var foodList = ["닭꼬치", "볶음밥", "짜장면", "족발", "짜장면"];
// indexOf() 배열의 특정 요소(데이터)가 몇 번 인덱스에 있는지 알려줌
var target = "짜장면";
var index = foodList.indexOf(target);
console.log(index); // 2출력
// 없으면 -1 출력
// 선형 탐색 (하나하나 순서대로 대입해보는 방식), 처음 발견된 것의 인덱스 반환
//=>
for (var i = 0; i < foodList.length; i++) {
  if (target === foodList[i]) {
    index = i;
    break;
  }
} // 와 같다

// include() 특정 데이터가 있는ㄴ지 없는지 논리로 확인
var flag1 = foodList.includes("떡볶이");
var flag2 = foodList.includes("족발");
console.log(flag1); // false
console.log(flag2); // true

// slice(): 배열을 원하는 범위만큼 절제
var sliced = foodList.slice(1, 3);
console.log(sliced); // 1번째 부터 3번째 이전까지 출력(1이상 3미만)
var sliced2 = foodList.slice(3); // end 생략 (3, 0)
console.log(sliced2); // 3번째 부터 끝까지
var sliced3 = foodList.slice();
console.log(sliced3); // 전체 복사

console.log(foodList); // slice : 복사본에서 추출하는 개념, 원본은 변하지 않음.



// concat() 배열을 결합
var arr1 = [10, 20, 30];
var arr2 = [99, 999];
var concated = arr1.concat(arr2);
console.log(concated); //[10, 20, 30, 99, 999] 출력, 결합한 사본을 생성, 원본 변화 없음

// splice() 배열의 삭제 및 삽입: 원본에서 삭제 삽입을 진행하므로 원본이 손상됨
foodList.splice(1, 2); // 1번째 부터 2개 지워라
console.log(foodList); // [ '닭꼬치', '족발', '짜장면' ] 출력
// foodList.splice(2) // 2번째 부터 끝까지 다 삭제
//데이터 삭제 & 추가
foodList.splice(0, 1, "파스타", "보쌈"); // 0번째 부터 1개 지우고 '파스타' 해당 자리에 추가
console.log(foodList);
//데이터 추가
foodList.splice(2, 0, "마라탕"); // 2번째 자리에 삭제 없이 '마라탕' 삽입
console.log(foodList);



var list = ["가", "나", "다", "라", "마"];

var sliced = list.slice(1, 3); // 1번째 부터 3번째 이전까지 출력(1이상 3미만)
console.log(sliced); // ['가', '라', '마'] 출력
var sliced2 = list.slice(2); // end 생략 (2, 0) 3번째 부터 끝까지
console.log(sliced2); // ['가','나']
var sliced3 = list.slice();
console.log(sliced3); // 전체 복사

console.log(list);


// reverse()
var nums = [10, 20, 30, 40, 50];
// nums.reverse();
// console.log(nums); 
// [ 50, 40, 30, 20, 10 ] 출력, 원본이 변경됨

// var numsCopy = nums;
// numsCopy.reverse()
// console.log(nums); // [ 50, 40, 30, 20, 10 ] 출력, 또 다시 원본이 변경됨

var numsCopy = nums.slice(); // copy
numsCopy.reverse();
console.log(nums); // [10, 20, 30, 40, 50] 출력
console.log(numsCopy); // [ 50, 40, 30, 20, 10 ] 출력