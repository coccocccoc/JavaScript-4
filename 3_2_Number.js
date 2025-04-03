// 모든 자리수를 더해서 합계 구하기

const str = '0123';
// 합계를 저장할 변수
let sum = 0;
// 0 + 1 + 2 + 3 = 6
// 문자열의 문자를 하나씩 추출
// 방법: for문 or charAt()함수
// for 요소를저장할변수 of 배열(또는 문자열)
for (const ch of str) {
  console.log(ch, typeof ch); // 0 string
  const num = parseInt(ch);
  console.log(num, typeof num); // 0 number
  sum = sum + num;
}
console.log(sum); // 6

// 초기화 조건 증감
// => 반복 횟수를 만들기 위한 코드
// 반복 횟수를 결정할 때 시작값이 꼭 1이 될 필요는 없음!
// 조건을 0으로 초기화 하는 이유: 배열의 index로 재활용할 때

// 일반 for문
// a의 용도: 1. 반복횟수   2. index
for (let a = 0; a < 4; a++){ // 반복횟수: 4 (0 1 2 3)
  // 문자열의 문자를 하나씩 추출
  // 문자열을 배열처럼 인덱스를 사용할 수 있음
  console.log(str.charAt(a), typeof str.charAt(a));
  let num = parseInt(str.charAt(a)); // '0' -> 0
  console.log(num, typeof num);
  // 합계에 각 자리수를 누적
  sum = sum + num;
}
console.log(sum);