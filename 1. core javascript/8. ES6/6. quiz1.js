const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];

function map(condition) {
  const filteredArr = [];
  for (const user of userList) {
      filteredArr.push(condition(user));
  }
  return filteredArr;
}
// 회원정보에서 회원의 이름들만 다 추출해서 배열에 담아줘
const userNameList = map((user) => user.userName);
console.log(userNameList);
console.log("=======================================");

// 회원정보에서 회원의 주소들만 다 추출해서 배열에 담아줘
const addressList = map((user) => user.address);
console.log(addressList);

console.log("=======================================");

// 회원의 첫 번째 취미들만 다 추출해줘
const firstHobbyList = map((user) => user.hobbys[0]);
console.log(firstHobbyList);
console.log("=======================================");

// 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// [ 대길이(abc1234), 빠나나(banana), … ]
const userNameAccountList = map((user)=> user.userName + "(" + user.account + ")")
console.log(userNameAccountList);


// 서울에 사는 급여가 400만원보다 높은 사람의 이름과 주소만 추출해줘
function filter(condition) {
  const filteredArray = []; // 필터링된 회원들을 다시 담을 배열
  for (const user of userList) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}



// find() 첫 번째 반환
// some() 논리로 반환
// every() 조건을 모두가 만족하는지 아닌지 논리값으로 반환
