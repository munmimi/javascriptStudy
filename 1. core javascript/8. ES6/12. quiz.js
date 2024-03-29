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

/*





*/

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

// const totalInDaejeon = traders
//   .filter((trs) => trs.year === 2023 && trs.trader.city === "대전")
//   .reduce((total, trs) => total + trs.value, 0);
// console.log(totalInDaejeon);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

// const nameListBusan = [];
// for (const trs of traders) {
//   if (trs.trader.city === "부산") {
//     nameListBusan.push(trs.trader.name);
//   }
// }
// console.log(nameListBusan);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
console.log("=======================");

// let hightestTransaction = traders[0];
// for (const trs of traders){
//   if (hightestTransaction.value < trs.value){
//     hightestTransaction = trs;
//   }
// }

// traders.reduce((max,trs) => {
//   console.log(trs);
//   return max.value < trs.value ? trs : max
// })

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
// const countByCities = {};
// traders.reduce((a, trader) => {
//   console.log(a);
//   a[trader.trader.city] = trader.value;
//   return a;
// }, {});

// for (const trs of traders){
//   if (trs.trader.city in traders){
//     totalByCity[trs.trader.city] += trs.value;

//   } else{
//     totalByCity[trs.trader.city]= trs.value;
//   }
// }
// console.log(countByCities);

console.log("======================");

traders.reduce((a, trader) => {
  console.log(a);
  a[trader.trader.city] = trader.value;
  return a;
}, {});
// const nameListInBusan = [];
// for (const trs of traders) {
//   if (trs.trader.city === '부산') {
//     nameListInBusan.push(trs.trader.name);
//   }
// }
// console.log('부산 거래자 이름리스트: ', nameListInBusan);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
console.log("======================");
// trsOver700Byyear = {};
// for (const trs of traders) {
//   const yearString = trs.year.toString();

//   if (trs.value >= 700000) {
//     //거래 액 필터 조건
//     if (!trsOver700Byyear["" + trs.year]) {
//       trsOver700Byyear["" + trs.year] = [trs];
//     } else {
//       // 지금 거래년도가 저장되어 있다면
//       trsOver700Byyear["" + trs.year].push(trs)
//     }
//   }
// }
// console.log(JSON.stringify(trsOver700Byyear, null, 2));

// .reduce(()=>{},{} )// 빈 객체로 시작
const trsOver700Byyear = traders
  .filter((trs) => trs.value >= 700000)
  .reduce((a, trs) => {
    if (!a[trs.year]) {
      a[trs.year] = [trs];
    } else {
      a[trs.year].push(trs);
    }

    return a;
  }, {});
console.log(JSON.stringify(trsOver700Byyear, null, 2));

// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
// 6-0. {
//   '김철수':{
//     '총액':300000,
//     '거래횟수':5
//   }
// }
// 6-1. 이름별로 value 합산
const average = traders.reduce((a, trs) => {
  if (!a[trs.trader.name]) {
    // 처음 등장한 이름이면 객체 생성해주새요
    a["" + trs.trader.name] = {
      total: trs.value,
      count: 1,
    };
  } else {
    // 두번째 등장부터는 객체의 토탈 키에 값을 더해주세요
    a["" + trs.trader.name].total += trs.value;
    a["" + trs.trader.name].count++;
  }

  // a/trs.length

  return a;
}, {});
console.log(average);
// 6-2. 평균구하기
for (const key in average) {
  console.log(average[key]);
  // 토탈/카운트 (카운트 된 만큼 길이니께)
  average[key].average = average[key].total / average[key].count;
}
console.log(average);

// 7.

// 7-0.
// {
//   '2-22_김철수':{거래액:2323234, 횟수:3},
//   '2-23_김철수':{거래액:233234, 횟수:2},
// }
const result = traders.reduce((a, trs) => {
  // 연도별 거래자 거래 횟수 집계

  const key = `${trs.year}_${trs.trader.name}`;
  if (!a[key]) {
    a[key] = 1;
  } else {
    a[key]++;
  }

  // 연도별 최대 거래 횟수 찾기
  const yearMaxKey = `max_${trs.year}`;
  if (!a[yearMaxKey] || a[key] > a[yearMaxKey].count) {
    // 첫 객체를 yearMaxKey에 넣어주고, yearMaxKey의 카운트 보다 다음이 더 크다면 자리 바꿈
    a[yearMaxKey] = { name: trs.trader.name, count: a[key] };
  }

  return a;
}, {});
console.log(result);
// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
// 8-0. 숫자가 정렬되어있어야 중간값을 찾을 수 있다.
// 8-1. 거래액 오름차로 정렬
// 정렬은 원본을 손상시킨다. - 안전하게 처리하기 위해 복사 후 정렬
console.log("======================================");
const sortedTraders = traders.slice().sort((a, b) => a.value - b.value);
console.log(sortedTraders);

// 중간값 거래 정보 찾기

// 배열의 요소 수가 홀수면 정확한 중간 인덱스가 나오는데 짝수면
// 중앙 두 값의 평균을 중간 값으로 한다.
const middleIndex = Math.floor(sortedTraders.length / 2);
let midddleTradeInfo;
if (sortedTraders.length % 2 === 1) {
  // 배열의 요소 수가 홀수인 경우
  //정확한 중간 인덱스를 지정
  midddleTradeInfo = sortedTraders[middleIndex];
} else {
  // 짝수인 경우
  midddleTradeInfo = [
    sortedTraders[middleIndex - 1], 
    sortedTraders[middleIndex]
  ];
}

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

console.log("====================================");
// (+) 객체 디스트럭쳐링
const trsCOuntByCity = traders.reduce((a, { trader }) => {
  const {city} = trader;
  if (!a[trader.city]) {
    a[trader.city] = 1;
  } else {
    a[trader.city]++;
  }

  return a;
}, {});
console.log(trsCOuntByCity);
const sortedTransactions = traders.slice().sort((a, b) => a.value - b.value);
console.log(sortedTransactions);
// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
