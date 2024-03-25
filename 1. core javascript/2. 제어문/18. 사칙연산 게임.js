var answer;
var countDown = 1;
var seccess = 0;
var fail = 0;

while (true) {
  var rn1 = Math.floor(Math.random() * 20)+1;
  var rn2 =  Math.floor(Math.random() * 20)+1;
  var calc = Math.floor(Math.random() * 3);

  if (rn1 !== rn2) {
  
  }
  if (calc === 0) {
    
    calc = "+";
    // ========================================================== + 연산
    answer = +prompt(`Q${countDown}. ${rn1} ${calc} ${rn2} =`);

    if (answer === rn1 + rn2) {
      alert("정답");
      seccess++;
    } else {
      alert("오답");
      fail++;
    }
  } else if (calc === 1) {
    calc = "-";
    // ========================================================== - 연산

    if (rn1 > rn2) {
      answer = +prompt(`Q${countDown}. ${rn1} ${calc} ${rn2} =`);
      if (answer === rn1 - rn2) {
        alert("정답");
        seccess++;
      } else {
        alert("오답");
        fail++;
      }
    } else {
      answer = +prompt(`Q${countDown}. ${rn2} ${calc} ${rn1} =`);
      if (answer === rn2 - rn1) {
        alert("정답");
        seccess++;
      } else {
        alert("오답");
        fail++;
      }
    }
  } else if (calc === 2) {
    calc = "x";
    // ========================================================== * 연산

    answer = +prompt(`Q${countDown}. ${rn1} ${calc} ${rn2} =`);
    if (answer === rn1 * rn2) {
      alert("정답");
      seccess++;
    } else {
      alert("오답");
      fail++;
    }
  }
  if (answer === 0) {
    alert("stop");
    break;
  }

  countDown++;
  if (countDown > 10) {
    break;
  }
}

alert(`총 ${countDown} 문제 중 정답: ${seccess} 오답: ${fail}`);


///// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ 선생님 풀이 ~~~~~~~~~~~~~~~~~~~~~~~~~~~