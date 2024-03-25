var season = "여름";

//조건을 판별할 변수 (비교식x, 문자값이나 숫자값만 써야 함)
switch (season) {
  case "봄":
  case "spring":
    console.log("꽃송이가");
    break;
  case "여름":
  case "summer":
    console.log("떠나요 제주도 푸른 밤");
    break;
  case "가을":
  case "fall":
    console.log("숲");
    break;
  case "겨울":
  case "witer":
    console.log("겨울아이");
    break;
  default:
    console.log("봄,여름,가을,겨울 중 하나를 입력하세요");
}
