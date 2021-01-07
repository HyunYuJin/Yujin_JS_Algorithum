// getTime(): 1970-01-01 0시 0분 0초 이후로부터 지금까지 흐른 시간을 1000분의 1초 단위(ms)로 반환
// 이를 이용해서 현재 연도를 출력하기

const time = new Date().getTime();
const year = Math.floor(time / (1000 * 60 * 60 * 24 * 365)) + 1970;

console.log(year);

// 1000(1초) * 60 = 1분
// 1분 * 60 = 1시간
// 1시간 * 24 = 하루
// 하루 * 365 = 1년
