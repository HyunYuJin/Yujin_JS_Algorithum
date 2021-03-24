function solution(n, k, card) {
    let answer;
    let temp = new Set(); // 중복은 지워주어야 한다.

    // i를 기준으로 j와 z를 움직여야 한다.
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let z = j + 1; z < n; z++) {
                temp.add(card[i] + card[j] + card[z]);
            }
        }
    }

    let a = Array.from(temp).sort((a, b) => b - a);
    answer = a[k - 1];

    return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
  