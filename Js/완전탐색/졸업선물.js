function solution(m, product) {
    let answer = 0;
    let n = product.length;
    // 적은 비용 순으로 정렬 -> 그래야 최대한 많은 선물을 줄 수 있다.
    product = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]), 0);

    for (let i = 0; i < n; i++) {
        // 완전탐색답게, 전부 다 할인받은 경우를 따져본다.
        let money = m - (product[i][0] / 2 + product[i][1]);
        let count = 1;
        for (let j = 0; j < n; j++) {
            // 학생 수가 많아지면 헛바퀴를 돌기 때문에 성능을 위한 조건문
            if (j !== i && product[j][0] + product[j][1] > money) break;
            if (j !== i && product[j][0] + product[j][1] <= money) {
                // 선물을 산 금액만큼 차감
                money -= product[j][0] + product[j][1];
                count++;
            }
        }

        // 최대한 많은 선물을 주는 것이 중요하다.
        answer = Math.max(answer, count);
    }

    return answer;
}

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3]
];
console.log(solution(28, arr));
