/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];
var end = false;
while (true) {
  var menu = +prompt(`
  현재 멤버 : [${tvxq}] \t
  메뉴를 선택해 주세요. \t
  1. 새로운 이름추가 \t
  2. 기존 멤버 삭제 \t
  3. 프로그램 종료
  `);
  switch (menu) {
    case 1:
      var newMember = prompt("새로운 멤버 이름을 입력하세요.");
      tvxq.push(newMember);
      break;

    case 2:
      var delMember = prompt(`삭제할 이름을 입력하세요. [${tvxq}]`);
      if (tvxq.includes(delMember)) {
        var delInd = tvxq.indexOf(delMember);
        tvxq.splice(delInd, 1);
      } else {
        alert(`${delMember}는(은) 잘못된 이름입니다! 다시 입력해 주세요.`);
      }
      if (tvxq.length === 0) {
        alert("모든 멤버가 삭제되었습니다.");
        break;
      }
      break;

    case 3:
      alert("프로그램이 종료되었습니다.");
      end = true;
      break;

    default:
      alert("메뉴를 선택해주세요");
  }
  if (end === true) break;
}
