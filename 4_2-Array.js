
const fruits = ['banana', 'orange', 'apple', 'mango'];

// 배열 정렬하기
// sort 함수는 원본 데이터를 변경한다!
fruits.sort();
console.log(fruits); // [ 'apple', 'banana', 'mango', 'orange' ]


// 배열을 역순으로 정렬
// 알파벳 역순 X. 원본 데이터에서 역순으로 정렬
fruits.reverse();
console.log(fruits); // [ 'orange', 'mango', 'banana', 'apple' ]


// 정렬 순서를 직접 정의하기
// 배열의 요소가 영어일 때는 알파벳 순서로 정렬됨
// 하지만 숫자일때는 정렬 기준이 명확하지 않음
// 배열의 요소가 숫자일 때는 정렬 기준을 직접 정의할 것

// sort 함수는 리턴값이 양수일 때 자리를 교체함
// 따라서 순정렬을 하고싶으면 a - b
// 역정렬을 하고싶으면 b - a
const arr = [40, 100, 1, 5];
// 매개변수: 인접해 있는 배열의 요소 두 개
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr); // [ 1, 5, 40, 100 ]
// 리턴값이 음수라면 그대로 유지
// 리턴값이 양수라면 자리 교체 => 앞에 있는 값이 더 크면 교체
// a: 40, b: 100 => -60
// a: 100, b: 1 => 99
// a: 100, b: 5 => 95
// sort 함수는 순회를 1번만 하지 않고,
// 정렬이 끝날때까지 반복한다


// 객체 목록 정렬하기
const personList = [
  { name: '유재석', age: 55 },
  { name: '김종국', age: 48 },
  { name: '양세찬', age: 35 },
  { name: '하하', age: 50 }
];
// 사람의 나이를 기준으로 정렬하기 (나이가 어린 순으로)
// sort 함수의 인자는 함수!!
// 매개변수는 배열에서 인접한 두 개의 요소
// 리턴값은 숫자(양수, 음수, 0). 실수는 안됨
// 매개변수인 a와 b는 단순 데이터가 아닌 object
// 따라서 a와 b를 바로 사용할 수 없음
personList.sort(function (a, b) {
  return a.age - b.age; // 결과는 숫자
});
// a: { name: '유재석', age: 55 }
// b: { name: '김종국', age: 48 }
console.log(personList);


