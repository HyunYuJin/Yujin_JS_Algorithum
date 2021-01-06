// 제한 무게가 있는 놀이기구 탑승
// 원범이와 친구들이 총 몇명 탈 수 있는지 알 수 있는 프로그램 작성하기
// 첫번째 입력은 제한 무게
// 두번째 입력은 함께한 친구들의 수 n명
// 세번째부터는 탑승할 친구들의 몸무게가 주어진다

const limit = prompt("제한 무게를 입력하세요.");
const n = parseInt(prompt("함께한 친구들의 수를 입력하세요."), 10);
let arr = [];
for (let i = 0; i < n; i++) {
  const weights = prompt("입력할 친구들의 몸무게를 입력하세요.");
  arr.push(weights);
}

// const limit = 50;
// const n = 5;
// let arr = ["20", "20", "20", "20", "20"];

console.log(limit);
console.log(n);
console.log(arr);

let sum = 0;
let beforesum = 0;
let count = 0;
for (let i = 0; i < n; i++) {
  sum += parseInt(arr[i], 10);

  // 왜 이 간단한걸 생각 못했을까!! 정말 고생했당😭
  if (limit < sum) {
    // console.log(beforesum);
    console.log(count);
    break;
  }

  beforesum += parseInt(arr[i], 10);
  count += 1;
}


// ------------------------------------------------------

// 사실 굳이 beforesum이 필요하지는 않다.
// 우리가 필요한건 오직 몇명인지!

/* for (let i = 0; i < n; i++) {
  sum += parseInt(arr[i], 10);

  if (limit >= sum) {
    count++;
  }
}

console.log(count); */

// 이렇게만 해줬어도 간단하게 해결할 수 있었지롱..!!!
