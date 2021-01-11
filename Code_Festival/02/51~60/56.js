// 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이 구하기
// 출력: England 22023

let nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900
};
  
let result = 0;
let arr = Object.keys(nationWidth).map((n) => {
    result = (nationWidth["korea"] - nationWidth[n]) * -1;

    return {
      nation: n,
      sub: result
    };
});
  
arr.sort((a, b) => {
    return a.sub - b.sub;
});

arr.shift();
  
console.log(arr[0].nation, arr[0].sub);


// ------------------------------------------------------


// Object.entry, Object.value, Math.abs 사용해서 구하기
const nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900
  };
  
  const w = nationWidth["korea"];
  
  delete nationWidth["korea"];
  
  const entry = Object.entries(nationWidth);
  const values = Object.values(nationWidth);
  
  // gap에 최댓값 저장
  let gap = Math.max.apply(null, values);
  let item = [];
  console.log("gap", gap);
  
  for (let i in entry) {
    if (gap > Math.abs(entry[i][1] - w)) {
      gap = Math.abs(entry[i][1] - w);
      item = entry[i];
    }
  }
  
  console.log(item);
  console.log(item[0], item[1] - 220877);
  