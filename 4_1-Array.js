// 배열: 자료 구조. 대량의 데이터를 저장할 때 사용 

let fruits = ["바나나", "오렌지", "사과", "망고"];


// toString: 배열을 string으로 변환
const str = fruits.toString();
console.log(str, typeof str);


// join: 구분자를 사용하여 배열 요소를 연결
const str2 = fruits.join('*');
console.log(str2, typeof str2);


// pop: 배열 요소를 제거하는 함수
// 마지막에 있는 요소를 제거하면서 반환
const result1 = fruits.pop();
console.log(result1, typeof result1); // 망고 string
console.log(fruits); // [ '바나나', ' 오렌지', '사과' ]

const result2 = fruits.pop();
console.log(result2, typeof result2); // 사과 string
console.log(fruits); // [ '바나나', ' 오렌지' ]


// push: 배열에 새로운 요소를 추가
fruits.push('키위');
console.log(fruits); // [ '바나나', ' 오렌지', '키위' ]


// shift: 배열의 첫번째 요소를 제거하고 반환
const result3 = fruits.shift(); // pop과 비슷
console.log(result3); // 바나나
console.log(fruits); // [ ' 오렌지', '키위' ]

const result4 = fruits.shift(); 
console.log(result4); // 오렌지
console.log(fruits); // [ '키위' ]


// unshift: 배열의 제일 앞에 새로운 요소를 추가
const result5 = fruits.unshift('레몬');
console.log(result5, typeof result5); // 2 number (배열 크기 반환)
console.log(fruits); // [ '레몬', '키위' ]
fruits.unshift('귤');
console.log(fruits);


// 배열 안에 있는 요소 교체하기
// 배열의 인덱스를 사용
// index: 0 ~ 2
fruits[0] = '체리';
console.log(fruits); // [ '체리', '레몬', '키위' ]


// splice: 배열의 특정 위치에 새로운 요소를 추가하거나 삭제
// 시작위치, 삭제할 요소의 개수, 새롭게 추가할 데이터
fruits.splice();
fruits.splice(1, 2, '딸기');
console.log(fruits);


// let fruits = ["바나나", "오렌지", "사과", "망고"];

// slice: 배열의 일부를 삭제
// 삭제한 요소를 반환
// slice 함수는 원본 데이터에 영향이 없음
// 따라서 작업 후 바로 결과를 받아야 함
const result6 = fruits.slice(3); // 마지막까지
console.log(result6); // 결과 [ "망고" ]
console.log(fruits); 
const result7 = fruits.slice(1, 3); // 시작 위치, 마지막 위치(포함x)
console.log(result7); // 결과 ["오렌지", "사과" ];
console.log(fruits);


// 배열 합치기
const arr1 = ['토마토', '오이'];
const arr2 = ['당근', '감자', ' 양파'];
const arr3 = ['호박', '배추'];
const arr4 = ['양배추'];
// 인자 개수 제한 없음
const result8 = arr1.concat(arr2, arr3, arr4);
console.log(result8);


// 배열 요소를 하나씩 꺼내면서 반복적인 작업하기
// 반복문과 비슷
// 인자는 함수!
// 해당 함수의 첫번째 인자는 value, 두번째 인자는 index
fruits.forEach(function (value, index) {
  const num = index.toString().padStart(3, 0);
  console.log(num, '번째 야채:', value);
});
