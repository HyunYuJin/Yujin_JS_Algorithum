// 2021.01.23 - 카카오 커머스 코딩 테스트
// 1번. N네트워크와 닉네임
// - 1~4번까지 네트워크별로 닉네임 구분하기
// - 닉네임의 중복이 있을 경우는 먼저 등록된 닉네임을 두고 나중에 등록된 닉네임은 무시한다.
// - 최대 5개까지 등록이 가능하며 5개 이상일 경우에는 가장 오래된 닉네임을 지운다.

function solution(n, record) {
    var answer = [];
    let serverArr = [];
    let result = [];

    for (let i = 1; i <= n; i++) {
        serverArr.push({
        serverNum: i,
        nickName: []
        });
    }

    for (let j = 0; j < serverArr.length; j++) {
        for (let i = 0; i < record.length; i++) {
        let server = parseInt(record[i].split(" ")[0], 10);
        let name = record[i].split(" ")[1];
        if (serverArr[j].serverNum == server) {
            serverArr[j].nickName.push(name);
        }
        }
    }

    serverArr.sort((a, b) => {
        return a.serverNum - b.serverNum;
    });

    serverArr.map((item) => {
        item.nickName.length !== 0 ? result.push(item.nickName) : result;
    });

    for (let i = 0; i < result.length; i++) {
        let a = Array.from(new Set(result[i]));

        if (a.length > 5) {
        let length = a.length - 5;

        for (let j = 0; j < length; j++) {
            a.shift();
        }
        }

        answer.push(...a);
    }

    return answer;
}

const n = 4;
const user = ["1 a", "1 b", "1 abc", "3 b", "3 a", "1 abcd", "1 abc", "1 aaa", "1 a", "1 z", "1 q", "3 k", "3 q", "3 z", "3 m", "3 b"];

console.log(solution(4, user));