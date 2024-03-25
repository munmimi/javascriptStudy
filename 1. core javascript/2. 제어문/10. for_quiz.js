var count = +prompt('정수값')
var message = ""
// for (let i = 1; i <= count; i++) {
//   var num = 2 ** i
//   message += num + ' '
// }
for (let i = 1; i <= count; i*=2) {
  message += i + ' '
}


alert(message);