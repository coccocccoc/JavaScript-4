// Math 객체: 산술, 삼각함수 등 다양한 수학 기능 제공

// 반올림
console.log(Math.round(4.9)); // 5
console.log(Math.round(4.4)); // 4


// 올림
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.4)); // 5


// 내림
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.4)); // 4
// floor와 동일
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(4.4)); // 4


// 부호 확인
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1


// 제곱
// 8의 2제곱
console.log(Math.pow(8, 2)); // 64

// 제곱근(루트)
console.log(Math.sqrt(64)); // 8


// 절대값
console.log(Math.abs(-4.5)); // 4.5
console.log(Math.abs(4.5)); // 4.5


// 숫자 목록 중에서 가장 작은 값 찾기
// 인자: n개
console.log(Math.min(150, 30, 20)); // 20

// 숫자 목록 중에서 가장 큰 값 찾기
console.log(Math.max(0, 30, 20, 5, 10)); // 30


// random 함수: 0(포함) ~ 1(포함x) 사이의 랜덤한 숫자가 반환됨
console.log(Math.random());
// 사용하는 경우: 주사위 굴리기(확률 게임)

// random 함수를 사용해서 0 ~ 1 사이의 값이 아닌 0 ~ 9 사이의 랜덤한 값 구하기
// random 함수는 그대로 사용하는 경우가 별로 없고 결과값을 활용해서 특정 범위의 값을 구해야 함
let num = Math.random();
console.log(num);
// 값의 범위: 0 ~ 9
console.log(num * 10);
// floor로 소수점 이하 자리 삭제
console.log(Math.floor(num * 10));
// 1을 더해서 값의 범위를 1 ~ 10 으로 만듦
console.log(Math.floor(num * 10) + 1);

