var input = 5;
var result = "";

for (var i = 1; i <= input; i++) {
  // 공백 증가
  // 늘어나면서 함께 늘어나는 것을 빼주면 되지!! 그건바로 i!!
  for (var k = 1; k <= input - i; k++) {
    result += " ";
  }

  // 별 증가
  for (var j = 1; j <= i * 2 - 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
