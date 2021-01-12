// 20190923 출력하기

// 조건
// 1. 코드 내에 숫자가 없어야 한다.
//     - 예) console.log(20190923);
// 2. 파일 이름이나 경로를 사용해서는 안된다.
// 3. 시간, 날짜 함수를 사용해서는 안된다.
// 4. 에러 번호 출력을 이용해서는 안된다.
// 5. input을 이용해서는 안된다.

const arr = "aacdddddddddfffffffffgghhh";
console.log(
  `${arr.match(/a/g).length}${Number(arr.match(/b/g))}${
    arr.match(/c/g).length
  }${arr.match(/d/g).length}${Number(arr.match(/e/g))}${
    arr.match(/f/g).length
  }${arr.match(/g/g).length}${arr.match(/h/g).length}`
);
