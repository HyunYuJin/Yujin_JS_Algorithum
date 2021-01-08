// 병합정렬
// 각 부분 리스트를 재귀적으로 합병한다.

// [2, 1, 4, 5, 6, 3]

// 분할부분
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

// 정렬하고 합치는 부분
function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) { // right의 length가 0이고 left에 값이 남아있을 때 left는 이미 정렬된 상태이기 때문에 그대로 넣어준다.
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

const arr = "2 1 4 5 6 3".split(" ").map((n) => parseInt(n, 10));
console.log(arr);
console.log(mergeSort(arr));
