const traders = [
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022,
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
// ========================================== 연습 1
console.log("================================ 연습 1");

const mappedTraders = traders
  .filter((trader) => trader.year === 2022)
  .map((trader) => trader.trader);
console.log(mappedTraders);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
// ========================================== 연습 2
console.log("================================ 연습 2");
const cities = [];
const traderLocations = traders.map((trader) => trader.trader.city);
for (let i = 0; i < traderLocations.length; i++) {
  if (!cities.includes(traderLocations[i])) {
    cities.push(traderLocations[i]);
  }
}
console.log(cities);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
// ========================================== 연습 3
console.log("================================ 연습 3");

const locatedDaejeonTraders = traders
  .filter((trader) => trader.trader.city === "대전")
  .map((trader) => trader.trader);

const newArr = [];
let tradersList33 = [];

for (let i = 0; i < locatedDaejeonTraders.length; i++) {

  for (traderData in locatedDaejeonTraders[i]) {
    console.log('locatedDaejeonTraders',locatedDaejeonTraders[i][traderData]);
    tradersList33.push(locatedDaejeonTraders[i][traderData] + ' 대전')
  }



}
for(let i=0; i <tradersList33.length; i++){
  if(!newArr.includes(tradersList33[i])){
    newArr.push(tradersList33[i])
  }
}

// for (data in newArr[i]) {
//   console.log('newArrr',newArr[i][data]);
// }
console.log(newArr);

// console.log(newArr);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
// ========================================== 연습 4
console.log("================================ 연습 4");

const tradersNames = traders.map((trader) => trader.trader.name);
console.log(tradersNames);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// ========================================== 연습 5
console.log("================================ 연습 5");

let total = 0;
const tradersInSeoulAmount = traders
  .filter((trader) => trader.trader.city === "서울")
  .map((trader) => trader.value)
  .forEach((value) => {
    total += value;
  });

console.log(total);
// foreach는 return이 없네 ~~~~~~~~
