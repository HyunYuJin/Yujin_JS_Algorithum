function solution(test) {
    let answer = 0;
    let person = [];

    // 경우의 수: [1등, 2등, 3등, 4등](4) * [1등, 2등, 3등, 4등](4) == (16)
    for (let i = 1; i <= test[0].length; i++) {
        for (let j = 1; j <= test[0].length; j++) {
            let count = 0;

            for (let k = 0; k < test.length; k++) {
                let p1 = 0; // 멘토
                let p2 = 0; // 멘티
                for (let s = 0; s < test[0].length; s++) {
                    // ex) i == 1, test[0][2] == 1
                    if (test[k][s] === i) p1 = s; // k회차 시험에서 멘토의 등수
                    // ex) j == 2, test[0][1] == 4
                    if (test[k][s] === j) p2 = s; // k회차 시험에서 멘티의 등수
                }
                if (p1 < p2) count++; // 멘토가 멘티보다 등수가 높으면 + 1

                // 모든 테스트에서 멘토가 멘티보다 우수한 성적을 받으면 경우의 수 + 1
                if (test.length === count) {
                    person.push([i, j]);
                    answer++;
                }
            }
        }
    }
    return answer;
}

let arr = [
    // 1등: 3번학생, 2등: 4번학생, 3등: 1번학생, 4등: 2번학생
    [3, 4, 1, 2],
    // 1등: 4번학생, 2등: 3번학생, 3등: 2번학생, 4등: 1번학생
    [4, 3, 2, 1],
    // 1등: 3번학생, 2등: 1번학생, 3등: 4번학생, 4등: 2번학생
    [3, 1, 4, 2]
];
console.log(solution(arr));
  