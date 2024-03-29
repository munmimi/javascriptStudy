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

function min(list, listKey) {
  let selectedUser = "";

  for (let i = 0; i < list.length - 1; i++) {
    const min = list[i][listKey] < list[i + 1][listKey] ? list[i] : list[i + 1];
    selectedUser = min.userName;
  }
  return selectedUser;
}
console.log("최소 salary를 가진 사용자:", min(userList, "salary"));
console.log("최소 age를 가진 사용자:", min(userList, "age"));

/// key값의 타입 유의!!!!!!! ""문자열이니까 list.key로 접근할 수 없다. list[key]로 접근, 변수의 타입을 제발제발 고민해보세요
/// const는 값이 절대!! 변하면 안된다. 값을 수정하려면 let 으로!!!! 선언할 때 대충 하지 마십시오
