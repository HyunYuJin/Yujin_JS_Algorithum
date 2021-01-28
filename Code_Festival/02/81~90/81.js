// 지뢰찾기
// 깃발 주변에 지뢰가 사방으로 있다.
// 깃발의 위치를 입력받아 지뢰와 함께 출력하는 프로그램
// "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

// 해당 위치의 이전 index, 다음 index에 *
// 해당 위치의 바로위 index와 아래 index에 *

const value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"; //지뢰 없이 깃발만 있는 리스트
let flag = value.split("\n");
let search = 0;
let count = 0;

for (let i of flag) {
  flag[count] = i.replace(1, "f").split(" ");
  count += 1;
}

count = 0; // 다시 count를 사용해야하니까!

for (let f of flag) {
  for (let z of f) {
    if (z === "f") {
      search = f.indexOf(z);

      if (search > 0) {
        // f가 0번째에 위치한 경우 대비
        f[search - 1] = "*";
      }
      if (search < 4) {
        // f가 4번째 위치한 경우 대비
        f[search + 1] = "*";
      }

      if (count > 0) {
        // count가 0인 경우 대비
        flag[count - 1][search] = "*";
      }
      if (count < 4) {
        // count가 4인 경우 대비
        flag[count + 1][search] = "*";
      }
    }
  }
  count += 1; // 밖의 for문이 다 돌때마다 (하나의 row를 다 돌고나면) count += 1
}

for (let i of flag) {
  console.log(i);
}
