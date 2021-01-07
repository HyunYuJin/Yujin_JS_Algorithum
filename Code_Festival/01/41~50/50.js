// 버블정렬: 두 인접한 원소를 검사해서 정렬하는 방법
// 시간복잡도는 n-1, n-2, … , 2, 1 번 = n(n-1)/2 로 느리다.

function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i; j++) { // 이미 검사한 배열 요소는 검사할 필요가 없다. 따라서 - i
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }

    return result;
  }

const items = "4 2 3 8 5".split(" ").map((a) => {
    return parseInt(a, 10);
});

console.log(items);
console.log(bubble(items));
