// 하노이의 탑
// 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
// 2. 모든 원판의 지름은 다르다.
// 3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
// 4. 작은 원반 위에 큰 원반을 놓을 수 없다.
// 5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.

// 이 규칙을 만족하며 A 기둥에 있는 원반 N 개를 모두 C 원반으로 옮기고 싶습니다.
// 모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요.

const route = [];

function hanoi(num, start, end, temp) {
    // 원판이 한개일 때는 바로 옮기면 된다.
    if (num === 1) {
        route.push([start, end]); // 바로 C로 옮기기
        return NaN;
    }

    // 원반이 n-1개를 경유 기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    // 가장 큰 원반을 목표기둥으로
    route.push([start, end]);
    // 경유기둥과 시작기둥을 바꾼다.
    hanoi(num - 1, temp, end, start);

}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);


// ------------------------------------------------------

// ⭐⭐너무너무 어려워하던 재귀 이해하기!⭐⭐

// function hanoi(num, start, end, temp)

// hanoi(num - 1, start, temp, end); // 원반이 n-1개를 경유 기둥으로 옮기고

// route.push([start, end]); // 가장 큰 원반을 목표기둥으로

// hanoi(num - 1, temp, end, start); // 경유기둥과 시작기둥을 바꾼다.


// 1번째 재귀
// function hanoi(3, 'A', 'B', 'C') : 냥1

    // function hanoi(2, 'A', 'C', 'B') : 냥2

        // function hanoi(1, 'A', 'B', 'C') : 냥3
            // route.push(['A', 'B']) -> 냥3 입장

        // route.push(['A', 'C']) -> 냥2 입장

    // function hanoi(1, 'B', 'C', 'A') -> 냥2 입장에서 2번째 재귀
        // route.push(['B', 'C']) -> 1개니까 냥2 입장에서 push
    
    // route.push(['A', 'B']) -> 냥1 입장에서 1번째 재귀 나오자마자 있는 push

// 2번째 재귀
// function hanoi(2, 'C', 'B', 'A') -> 냥1 입장에서 2번째 재귀
    // function hanoi(1, 'C', 'A', 'B') -> 냥1 입장에서 1번째 재귀 (⭐재귀가 들어가면 코드는 위에서부터 읽히니까!⭐)
        // route.push(['C', 'A']) -> 1개니까 냥1 입장에서 push
    
    // route.push(['C', 'B']) -> 1번째 재귀 나오자마자 있는 push
// function hanoi(1, 'A', 'B', 'C') -> 냥1 입장에서 다시 2번째 재귀
    // route.push(['A', 'B']) -> 1개니까 냥1 입장에서 push

// route = [
//     ['A', 'B'],
//     ['A', 'C'],
//     ['B', 'C'],
//     ['A', 'B'],
//     ['C', 'A'],
//     ['C', 'B'],
//     ['A', 'B']
// ]
// 7번!