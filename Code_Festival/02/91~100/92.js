// 키보드 고장
// 3, 4, 6을 누르지 않고 월급 입금을 두번에 나눠 주기
// 1. 직원은 2000명, 3초 이내에 수행하기
// 2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식
// 3. 출력값도 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 형식

function solution(array) {
  // index[1], index[3] 뽑아서 확인하기
  const name = array[0];
  const salary = array[1];
  const account = array[3];

  if (salary.includes("3") || salary.includes("4") || salary.includes("6")) {
    console.log("adsf");
  }
}

const input = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'5,000,000','S은행','100-0000-0000-002'
이과장,'3,200,000','S은행','100-0000-0000-003'
홍팀장,'3,300,000','S은행','100-0000-0000-004'
이대리,'5,300,000','S은행','100-0000-0000-005'`;

let input_array = input.split("\n");
let number = [];

for (let i of input_array) {
  let j = i.split(",");
  let k = j.slice(1, j.length - 2);
  number.push(k.join(""));
}

console.log(number);

let result = [];
let salaryOne = "";
let salaryTwo = "";

for (let salary of number) {
  // console.log("월급: ", salary);
  for (let div_salary of salary) {
    // console.log("나뉜 월급", div_salary);

    if (div_salary !== "'") {
      if (div_salary === "3") {
        salaryOne += "1";
        salaryTwo += "2";
      } else if (div_salary === "4") {
        salaryOne += "2";
        salaryTwo += "2";
      } else if (div_salary === "6") {
        salaryOne += "1";
        salaryTwo += "5";
      } else {
        salaryOne += div_salary;
        salaryTwo += "0";
      }
    }
  }

  // console.log(salaryOne);
  // console.log(salaryTwo);
  result.push([parseInt(salaryOne, 10), parseInt(salaryTwo, 10)]);
  salaryOne = "";
  salaryTwo = "";
}
console.log(result);
