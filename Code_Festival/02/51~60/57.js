// 1의 개수 세어보기
// 0부터 1000까지의 수에서 1은 몇 번이 들어갔을까

// ex) 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개

let arr = "";
let count = 0;

for (let i = 0; i <= 1000; i++) {
  arr += String(i);
}

arr = arr.split("");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "1") {
    count += 1;
  }
}

console.log(count);