var pets = ['강아지','고양이','앵무새']

// 배열 추가
pets[3]='참새' // 배열에 직접 추가

// push(): 배열 마지막에 데이터 추가
pets.push('수달')
pets.push('해달')
// 여러개를 한번에 추가
pets.push('표범','치타','사자')

console.log(pets);


//배열 마지막 데이터 삭제 pop()
var myPet1 = pets.pop();
pets.pop();
var myPet2 = pets.pop();// 변수에 지워진 요소를 담을 수 있다.

console.log(pets);
console.log(myPet1);
console.log(myPet2);


// shift() 배열의 첫 번째 데이터 삭제
// unshift() 배열의 첫번째에 추가

pets.shift()
console.log(pets);
pets.unshift('리트리버')
console.log(pets);
