// Set: 자료구조. 대량의 데이터를 저장할 때 사용
// 특징: 데이터 중복 불가, 순서 없음

// set 생성
const set = new Set();

// 데이터 추가
set.add(1);
set.add(2);
set.add(3);

console.log(set);

// set의 크기
const size = set.size;
console.log(size);

// 데이터 삭제
// 삭제시에는 삭제할 value를 입력
set.delete(2); // 순서x, index x
console.log(set);

// set 안에 특정 값이 있는지 확인
// 예: 값이 있는지 확인 후 삭제
const result = set.has(1);
console.log(result); // true

const result2 = set.has(2);
console.log(result2); // false

// set 안에 있는 값을 모두 꺼내기
// index가 없는데 어떻게..?
// for문 사용
for (let value of set){
  console.log(value);
} // 1 3

// forEach: set 안에 요소를 하나씩 꺼내면서 반복적인 작업
// forEach 함수의 인자는 method
set.forEach((value) => {
  console.log(value);
}); // 1 3

// set 안에 저장된 모든 값을 삭제
set.clear();
console.log(set); // Set(0) {}
