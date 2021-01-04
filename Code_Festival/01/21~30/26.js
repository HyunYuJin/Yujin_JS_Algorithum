// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램 만들기

const input = prompt('행성의 이름을 입력하세요.');
let planets = [
  {
    kor: "수성",
    eng: "Mercury"
  },
  {
    kor: "금성",
    eng: "Venus"
  },
  {
    kor: "지구",
    eng: "Earth"
  },
  {
    kor: "화성",
    eng: "Mars"
  },
  {
    kor: "목성",
    eng: "Jupiter"
  },
  {
    kor: "토성",
    eng: "Saturn"
  },
  {
    kor: "천왕성",
    eng: "Uranus"
  },
  {
    kor: "해왕성",
    eng: "Neptune"
  }
];

for (let i = 0; i < planets.length; i++) {
  if (planets[i].kor == input) {
    console.log(planets[i].eng);
  }
}

// ------------------------------------------------------

// 👍더 간단한 방법!
// Key: Value 형태로 구하면 더 쉽게 구할 수 있다.

const input = prompt('행성의 이름을 입력하세요.');
let planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune"
};

console.log(planets[input]);
