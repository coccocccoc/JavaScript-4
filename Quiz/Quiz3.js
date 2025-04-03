// 3.
// 16 -> 17

// 배열
const arr = [1, 'aa', true, '5', 10];
// number, boolean => 바로 더하기
// string => 타입캐스팅


// boolean은 숫자로 변환할 수 있다!
// let result = !isNaN(true);
// console.log(result); // true
// boolean은 계산식에서 자동으로 형변환이 됨
// true는 1, false는 0
// console.log(1 + true); // 결과는 2, 따라서 true는 1
// console.log(1 + false); // 결과는 1, 따라서 false는 0


// 합계를 저장할 변수
let sum = 0;

for (let num of arr) {
  // 배열의 요소가 number라면 합계에 누적
  const type = typeof num;
  if (type == 'number') { // type이 number라면 
    sum = sum + num;
  } else if (type == 'string' && !isNaN(num)) {
    // type이 string이고 number로 변환이 가능하다면
    // isNaN: 변환이 가능하면 -> false
    // string -> number 
    sum = sum + parseInt(num);
  } else if (type == 'boolean') {
    // boolean은 계산식에서 자동으로 형변환이 됨
    // true는 1
    sum = sum + num;
  }
}

console.log(sum); // 17