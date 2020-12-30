// 제출코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("");

let obj = [
  { name: "a", value: -1 },
  { name: "b", value: -1 },
  { name: "c", value: -1 },
  { name: "d", value: -1 },
  { name: "e", value: -1 },
  { name: "f", value: -1 },
  { name: "g", value: -1 },
  { name: "h", value: -1 },
  { name: "i", value: -1 },
  { name: "j", value: -1 },
  { name: "k", value: -1 },
  { name: "l", value: -1 },
  { name: "m", value: -1 },
  { name: "n", value: -1 },
  { name: "o", value: -1 },
  { name: "p", value: -1 },
  { name: "q", value: -1 },
  { name: "r", value: -1 },
  { name: "s", value: -1 },
  { name: "t", value: -1 },
  { name: "u", value: -1 },
  { name: "v", value: -1 },
  { name: "w", value: -1 },
  { name: "x", value: -1 },
  { name: "y", value: -1 },
  { name: "z", value: -1 }
];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < obj.length; j++) {
    if (obj[j].value == -1) {
      if (input[i] == obj[j].name) {
        obj[j].value = i;
      }
    }
  }
}

let arr = "";
for (let z = 0; z < obj.length; z++) {
  arr += obj[z].value + " ";
}
console.log(arr);

// -------------------------------------------------------------------------------------------------------

// 개선 코드
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

let resultArr = [];
let result = "";

for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i);

  for (let j = 0; j < input.length; j++) {
    resultArr.push(input[j].indexOf(alphabet));
  }
}

result = resultArr.join(" ");
console.log(result);
