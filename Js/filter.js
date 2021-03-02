const animals = ["복슬 강아지", "검정 고양이", "노란 햄스터", "강아지", "노랑 고양이", "고양이", "흰 토끼"];

let cats = [];
for (let i = 0; i < animals.length; i++) {
	let animal = animals[i];
	// indexOf는 파라미터로 넘겨준 텍스트가 몇 번째 위치에 있는 지 알려주는 친구입니다.
	// 파라미터로 넘겨준 텍스트가 없으면 -1을 반환해요!
	// 즉 아래 구문은 고양이라는 단어를 포함하고 있니? 라고 묻는 구문이죠!
	if (animal.indexOf("고양이") !== -1) {
		cats.push(animal);
	}
}
console.log(cats);

// 위의 코드를 filter로 바꾸기
const animals = ["복슬 강아지", "검정 고양이", "노란 햄스터", "강아지", "노랑 고양이", "고양이", "흰 토끼"];
let cats = animals.filter((value) => {
  return value.indexOf("고양이") !== -1;
});

console.log(cats);
