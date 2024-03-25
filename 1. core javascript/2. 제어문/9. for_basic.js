var i; // 1. begin
while (i <= 5) { // 2. end
  console.log("hello"); // 3. execute
  i++; // 4. step
}

for (var i = 0; i < 5; i++) {
  console.log("hello");
}


// 1 ~ 10 누적합
var total = 0;
for(var i = 0; i < 10; i++){
  total += i
}
