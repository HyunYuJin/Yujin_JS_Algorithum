// Self Number가 아니라면 index에 1 넣어주기
const N = 1000;
const selfNumber = new Array(N).fill(false);

for (let i = 1; i <= N; i++) {
    selfNumber[d(i)] = true;
    if (!selfNumber[i]) console.log(i);
}

function d(n) {
    let temp = n;
    let sum = temp;

    while (temp > 0) {
        sum += temp % 10;
        temp = parseInt(temp / 10);
    }

    return sum;
}