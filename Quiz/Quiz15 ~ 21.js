// 15.
// 7.5를 반올림하여 정수로 출력
console.log(Math.round(7.5)); // 8

// 16.
// 5.9를 무조건 내림하여 정수로 출력
console.log(Math.floor(5.9)); // 5

// 17.
// 42의 부호를 나타내는 값 출력
console.log(Math.sign(42)); // 1

// 18.
// 10, 20, 30, 40, 50 중에서 가장 작은 숫자 구하기
console.log(Math.min(10, 20, 30, 40, 50)); // 10

// 19.
// 3, 6, 9, 12, 15 중에서 가장 큰 숫자 구하기
console.log(Math.max(3, 6, 9, 12, 15)); // 15

// 20.
// 1에서 6까지의 숫자를 무작위로 생성하는 6면체 주사위
let dice = Math.floor(Math.random() * 6 + 1);
console.log('주사위 결과:', dice);

// 21.
// 주사위를 3번 던지고, 각 결과를 배열에 저장
const arr = [];
for (let i = 1; i <= 3; i++){
  let result = Math.floor(Math.random() * 6 + 1);
  arr.push(result);
};
console.log('3번 던진 결과:', arr);