const userNames = ['김철수','강감찬','박영희']

// userNames에서 각각의 요소들을 다시 변수에 집어넣고 싶다.
// const kim = userNames[0]
// const kang = userNames[1]
// const park = userNames[2]
// console.log(`a:${kim},b:${kang},c${park}`);

const [kim,kang,park] = userNames; // 배열 구조 분할, 디스트럭쳐링
// const kim = userNames[0]
// const kang = userNames[1]
// const park = userNames[2] 와 같다
console.log(kim,kang,park);

const [kk,,pp] = userNames; // 배열 구조 분할, 디스트럭쳐링
console.log(kk,pp);

let first=10, second = 20;
[first, second] = [second,first]
console.log(`first:${first}, second:${second}`);

// 배열 안에서 맨 앞에 2개만 각각의 변수에 저장하고
// 나머지는 다시 배열로 묶고싶다.
const numbers = [1, 3, 5, 6, 7, 9, 11, 13]
// const numsCopy = numbers.slice();// 원본 손상 방지

// const one = numsCopy.shift()// 첫 번째 요소 빼 옴
// const three = numsCopy.shift()
// console.log(one);
// console.log(three);
// console.log(numsCopy);

const [one,three,...numsCopy] = numbers // 첫번째 요소 one에 담고, 두번째요소 three에 담고 나머지요소는 numsCopy에 카피
console.log(one);
console.log(three);
console.log(numsCopy);
console.log(numbers);// 원본 손상되지 않음

//스프레드를 통한 배열 간편 복사
// const foods = ['감튀','햄버거','콜라'];
// const copyFoods = foods; // 주소만 복사된 것

// foods[0] = '치킨' // foods, copyFoods 모두 수정됨

// console.log(`foods:`,foods);
// console.log(`copyFoods:`,copyFoods);
const foods = ['감튀','햄버거','콜라'];
const copyFoods = foods.slice();// 찐 복사
const copyFoods2 = [...foods]// 찐 복사
const copyFoods3 = foods.map((f)=>f);// 찐 복사

foods[0] = '치킨' // 

console.log(`foods:`,foods);
console.log(`copyFoods:`,copyFoods);

const newFoods = ['육포', ...foods, '닭다리']// 추가, 배열 복사 , 추가해서 새 배열 생성
console.log(newFoods);