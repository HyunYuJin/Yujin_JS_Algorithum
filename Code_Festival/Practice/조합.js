// Input: [1, 2, 3, 4]
// Output: [ [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4] ]

function getCombination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // fixed를 제외한 나머지 배열 요소들
    const combinations = getCombination(rest, selectNum - 1); // 나머지에 대한 조합
    const attached = combinations.map((combination) => [fixed, ...combination]); // 돌아온 조합에 떼 놓은(fixed) 값 붙이기
    result.push(...attached); // 배열 모두 push
  });

  return result;
}

const example = [1, 2, 3, 4];
console.log(getCombination(example, 3));
