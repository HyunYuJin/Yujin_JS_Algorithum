const animals = ["강아지", "고양이", "햄스터", "강아지", "고양이", "고양이", "토끼"];

let count = 0;
for (let i = 0; i < animals.length; i++) {
	let animal = animals[i];
	if (animal === "고양이") {
		count += 1;
	}
}
console.log(count);

// 위의 코드를 map을 이용해서 변경하기
const animals = ["강아지", "고양이", "햄스터", "강아지", "고양이", "고양이", "토끼"];
let count = 0;

animals.map((value) => {
  if (value === "고양이") {
    count += 1;
  }
});

console.log(count);
