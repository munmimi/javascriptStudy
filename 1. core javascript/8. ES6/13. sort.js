//배열 데이터 정렬하기

const num = [6, 11, 3, 7, 9, 10, 2, 4, 1];

num.sort((a, b) => a - b); //a랑 b랑 싸워서 양수가 나오면
console.log(num);

num.reverse(); //내림차. reverse는 역정렬이다
//한방에 내림차 하는 방법
num.sort((a, b) => b - a); //a랑 b랑 싸워서 양수가 나오면
console.log(num);

//

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

userList.sort((a, b) => a.age - b.age); //나이 오름차
console.log(userList);

userList.sort((a, b) => b.salary - a.salary); //급여오름차
console.log(userList);
