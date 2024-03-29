const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 2700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];

// 배열 교차함수
// array.forEach(element => {

// }); //배열의 요소를 순회

// for of 문
// for (user of userList){
//   console.log(`이름은 ${user.userName}, 소재지 ${user.address}`);
// }



let total = 0;
[10, 20, 30].forEach((n) => {
  total += n;
});
console.log(total);

// function myForEach(array, callback){
//   for (const x of array){
//     callback(x)
//   }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter 조건에 맞는 배열안의 요소를 필터링
const filteredArray = numbers.filter((n) => n % 2 === 0);
console.log(filteredArray);
// [ 2, 4, 6, 8, 10] 출력

// 회원 목록에서 이름이 세 글자인 회원들을 필터링 해줘
const filteredUserList = userList.filter((user) => user.userName.length === 8);
console.log(filteredUserList);

// map 배열에서 특정 데이터들을 추출해서 새로운 배열에 매핑
const mappedNumbers = numbers.map((n) => `번호${n}`);
console.log(mappedNumbers);
// [
//   '번호1', '번호2',
//   '번호3', '번호4',
//   '번호5', '번호6',
//   '번호7', '번호8',
//   '번호9', '번호10'
// ] 출력

//// filter - 10개의 배열을 필터링하면 10개 이하로 출력 (편집됨)
//// map - 10개의 배열을 필터링하면 10개로 출력 (수정됨)

// 회원목록에서 회원의 나이를 추출해서 xx세로 매핑
const mappedUsers = userList.map((user) => `${user.age} 세`);
console.log(mappedUsers);
// [ '35 세', '18 세', '56 세', '42 세' ] 추출

// 회워목록에서 회원 이름과 회원의 나이와 회원의 주소를 추출할건데
// 이름의 키값은 nickName, 나이는 old, 주소는 addr로 하고 싶음
const mappedUserList = userList.map((user) => {
  return { nickName: user.userName, old: user.age, addr: user.address };
}); // 여러줄일 때 중괄호 기입과 return 생략 불가능하다는 사실을 유의하쇼

const triple = numbers.find((n) => n % 3 === 0);
