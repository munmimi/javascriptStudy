const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbies: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbies: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbies: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbies: ["독서", "테니스"],
  },
];

// 회원 정보 중에 취미가 두 개인 사람들만 추출해서 필터링해주세요.
function filterByHas2Hobby() {
  const filteredArray = []; //필터링된 회원들을 다시 담을 배열

  for (const user of userList) {
    if (user.hobbies.length === 2) {
      filteredArray.push(user);
    }
  }

  return filteredArray;
}
function filterUserLiveInSeoul() {
  const filteredArray = [];
  for (const user of userList) {
    if (user.address === "서울") {
      filteredArray.push(user);
    }
  }

  return filteredArray;
}
// 콜백
function filterUserByOptions(option) {
  const filteredArray = [];
  for (const user of userList) {
    if (option(user)) {
      filteredArray.push(user);
    }
  }

  return filteredArray;
}
// const newArray = filterByHas2Hobby();
// const newArray = filterUserLiveInSeoul();
const newArray = filterUserByOptions(user => user.address === "서울");
// console.log(newArray);


///콜백을 이용함 배열 필터링 함수
function filter(condition){
  const filteredArray=[];
  for (const user of userList){
    if(condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

const filteredUsers = filter(function(user){
  // return user.address ==='서울' && user.job === '게이머';
  return user.hobbies[0].length ===5;
  //조건을 계속 바꾸어 가며 출력
})

console.log(filteredUsers);