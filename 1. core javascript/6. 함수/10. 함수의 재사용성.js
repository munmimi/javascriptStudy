//배열안에 특정요소의 인덱스를 찾아 반환하는 함수
const NOT_FOUND = -1;
function myIndexOf(arr, searchElem) {
  for (var i = 0; i < arr.length; i++) {
    if (searchElem === arr[i]) {
      return i;
    }
  }
  // if에 한번도 안걸렸다, 못찾았다, 없다!~!~
  return NOT_FOUND;
}
//배열안에 특정요소 유무를 반환하는 함수
function myIncludes(arr, searchElem) {
  return myIndexOf(arr, searchElem) !== NOT_FOUND;
}

var foods = ["족발", "피자", "파스타", "김치찌개"];

var idx = myIndexOf(foods, "족발");
var includes = myIncludes(foods, "족발");
console.log(idx,includes); //귯~~~~~~~~
