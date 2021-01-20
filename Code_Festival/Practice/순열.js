// => [
//   [ 1, 2, 3 ], [ 1, 2, 4 ],
//   [ 1, 3, 2 ], [ 1, 3, 4 ],
//   [ 1, 4, 2 ], [ 1, 4, 3 ],
//   [ 2, 1, 3 ], [ 2, 1, 4 ],
//   [ 2, 3, 1 ], [ 2, 3, 4 ],
//   [ 2, 4, 1 ], [ 2, 4, 3 ],
//   [ 3, 1, 2 ], [ 3, 1, 4 ],
//   [ 3, 2, 1 ], [ 3, 2, 4 ],
//   [ 3, 4, 1 ], [ 3, 4, 2 ],
//   [ 4, 1, 2 ], [ 4, 1, 3 ],
//   [ 4, 2, 1 ], [ 4, 2, 3 ],
//   [ 4, 3, 1 ], [ 4, 3, 2 ]
// ]

function getPermutations(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((n) => [n]);

  arr.forEach((fixed, index, origin) => {
    const rest = [origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNum - 1);
    const attach = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...attach);
  });

  return result;
}

const example = [1, 2, 3, 4];
console.log(getPermutations(example, 3));
