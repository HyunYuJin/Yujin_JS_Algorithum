// 함수를 이용하여 원의 넓이를 구하는 코드를 작성
// 입력: 반지름의 길이 정수 n
// 원의 넓이를 반환하는 함수 만들기

const n = prompt('반지름을 입력하세요.');

function circle(radius) {
    let result = radius * radius * 3.14;
    return result;
}

console.log(circle(n));