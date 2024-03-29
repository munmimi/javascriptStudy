const employee = {
  empName: "뽀로로",
  age: 10,
  hireDate: "2020-01-30",
  birthDate: "2020-01-30",
};
const name = employee.empName;
const hire = employee.hireDate;

const { empName, hireDate } = employee;
// console.log(e`name:${empName},hire:${hireDate}`);

function foo({ empName, age }) {
  // const { empName, age } = employee;
  console.log(`내 이름은 ${empName} 입니다.`);
  console.log(`나이는 ${age} 입니다.`);
}

const age = 10; // 이미 선언한 변수와 이름이 겹칠때
const { age: empAge, birthDate } = employee; //
console.log(empAge);

// 키가 문자열인 경우
const divStyle = {
  "font-size": "18px",
  "background-color": "red",
};

const { "font-size": fontSize, "background-color": bgColor } = divStyle;

console.log("============================");

const dog = {
  kind: "말티즈",
  name: "해피",
  age: 3,
  injection: false,
};
const { kind, age: petAge, ...rest } = dog;
console.log(kind);
console.log(age);
console.log(rest);

// 객체 안전 복사
const copyDog = {...dog};
copyDog.age = 10;

const copyDog2 = {
  ...dog,
  age: 20,
  favorite:['산책']
}

console.log(dog);
console.log(copyDog2);