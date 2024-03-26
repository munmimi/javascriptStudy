/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var userInfo = {
  userList: [
    {
      account: "kim1",
      password: "kkk1",
      username: "김두한",
    },
    {
      account: "park1",
      password: "ppp1",
      username: "박찬호",
    },
    {
      account: "hong1",
      password: "hhh1",
      username: "홍길동",
    },
  ],
};
/// 로그인 if 문을 돌아야만 유저가 있는것이다.
/// 그렇다면 유저가 있는지 판단하는 가상 증거를 만들어서,
/// if문에 진입하는지 안하는지에 따라 유저의 유,무를 가릴 수 있다.
while (true) {
  var idValue = prompt("아이디를 입력해주세요");

  var flag = false; // id 존재 여부

  for (i = 0; i < userInfo.userList.length; i++) {
    if (userInfo.userList[i].account === idValue) {

      var matchedUser = userInfo.userList[i];
      console.log(`matchedUser:`, matchedUser);

      flag = true; // 존재할 때

      while (true) {
        var pwValue = prompt("비밀번호를 입력해주세요");

        if (pwValue === matchedUser.password) {
          alert(`${matchedUser.username}님 환영합니다!`);
          break;
        } else {
          alert("비밀번호를 다시 입력해주세요");
        }
      }
    }
  }
  // 계정이 존재하지 않으면 앞선 if문에 걸리지 않으므로 flag = false;
  if (!flag) {
    alert('일치하는 회원이 없습니다.');
    break;
  }


}
// while (true) {
//   var idValue = prompt("아이디를 입력해주세요");

//   var matchedUser = null; // id 존재 여부

//   for (i = 0; i < userInfo.userList.length; i++) {
//     if (userInfo.userList[i].account === idValue) {

//       matchedUser = userInfo.userList[i];
//       console.log(`matchedUser:`, matchedUser);


//       while (true) {
//         var pwValue = prompt("비밀번호를 입력해주세요");

//         if (pwValue === matchedUser.password) {
//           alert(`${matchedUser.username}님 환영합니다!`);
//           break;
//         } else {
//           alert("비밀번호를 다시 입력해주세요");
//         }
//       }
//     }
//   }
//   // 계정이 존재하지 matchedUser에 아무 데이터도 들어가지 않기 때문에
//   if (matchedUser === null) {
//     alert('일치하는 회원이 없습니다.');
//     break;
//   }
// }
