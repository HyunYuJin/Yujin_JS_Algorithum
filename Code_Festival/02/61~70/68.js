// 버스 도착시간이 몇 분 남았는지 알려주는 프로그램 만들기
// 출력 포맷: 00시 00분
// ex) 1시간 3분이 남았을 경우 01시간 03분으로 출력
// 현재 시간보다 이전인 버스가 있다면 "지나갔습니다." 출력하기

function solution(schadule, time) {
    let timeArr = time.split(":").map((n) => parseInt(n, 10));
    console.log("timeArr: ", timeArr);
    let busArr = [];
    let sub = { hour: 0, min: 0 };
    let result = [];
  
    for (let i = 0; i < schadule.length; i++) {
      let bus = schadule[i].split(":");
      busArr = bus.map((n) => parseInt(n, 10));
      console.log("dsafasdf", busArr);
      let hour = busArr[0];
      let min = busArr[1];
  
      if (timeArr[0] > hour) {
        result.push("지나갔습니다.");
      } else {
        if (timeArr[0] === hour) {
          // 같은 경우
          if (timeArr[1] > min) {
            result.push("지나갔습니다.");
          } else {
            sub.min = timeArr[1] - min;
            console.log("sub.min", sub.min);
          }
        } else if (timeArr[0] < hour) {
          // 큰 경우
          sub.hour = hour - timeArr[0];
          sub.min = min - timeArr[1];
  
          if (sub.min < 0) {
            sub.hour -= 1;
            sub.min = 60 + sub.min;
          }
        }
        if (sub.hour < 10) sub.hour = "0" + sub.hour;
        if (sub.min < 10) sub.min = "0" + sub.min;
  
        result.push(String(sub.hour).concat(":", String(sub.min)));
      }
    }
  
    return result;
  }
  
  const input = ["12:30", "13:20", "14:13"];
  const currentTime = "12:40";
  
  console.log(solution(input, currentTime));
  // ["지나갔습니다.", "00시간 40분", "01시간 33분"]
  