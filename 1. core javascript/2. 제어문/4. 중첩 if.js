var height = +prompt("키를 입력해주세요");

if (height >= 14) {
  var age = +prompt("나이를 입력해주세요");

  if (age >= 8) {
    alert("놀이기구에 탑승할 수 있습니다");
  } else {
    alert("나이제한으로 놀이기구에 탑승할 수 없습니다");
  }

} else {
  alert("신장미달로 놀이기구에 탑승할 수 없습니다");
}

alert('오늘 하루 즐거운 시간되세요!')