
// var line =""
// // for(var i = 0; i <= 4; i++){
 
// //   line += '/t'

// // }
// for(var j = 0; j <= 7; j++){
//   line += '*'
// }

//가로길이, 세로길이
var width = +prompt('한 변의 길이 1')
var heigth = +prompt('한 변의 길이 2');;

// 사각형을 저장할 변수
var rectangle = ''


for(var i = 0; i < width; i++){
  // 3번
  rectangle+='\n'

  for(var j = 0; j < heigth; j++){
    rectangle+='*'
  }
}
console.log(rectangle);

// *****
// *****
// *****