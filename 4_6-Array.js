// 배열의 요소 중에서 20보다 큰 숫자 찾기
// 그리고 각 요소에 2를 곱해서 새로운 배열 만들기

// 원본
const arr = [10, 15, 20, 25, 30];

// 1. 20보다 큰 요소만 찾아서 새로운 배열 생성
const filteredList = arr.filter(function (value) {
  return value >= 20;
});
// 2. 값에 2를 곱해서 새로운 배열을 생성
const mapList = filteredList.map(function (value) {
  return value * 2;
});

console.log('최종:', mapList);

// 함수 체이닝을 사용해서 연속적으로 계산하기
const newArr = arr
  .filter(function (value) {
    return value >= 20;
  })
  .map(function (value) {
    return value * 2;
  });

console.log(newArr);