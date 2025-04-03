// 배열 안에 요소를 변경하여 새로운 배열 만들기
// sort: 정렬
// filter: 필터링(제거)
// map: 내용을 새롭게 교체

const arr = [1, 2, 3, 4, 5];

// 배열 요소의 값을 2배로 수정
// 함수의 매개변수: value, index, array
// 함수의 리턴값: 새로운 값
const newArr = arr.map(function (value) {
  return value * 2;
});
console.log(newArr);


// 객체 배열을 사용해서 내용 변경하기

const personList = [
  { firstName: "재석", lastName: "유" },
  { firstName: "종국", lastName: "김" },
  { firstName: "세찬", lastName: "양" }
];
// 성과 이름을 조합하여 풀네임 속성 만들기
// 풀네임 속성을 object에 추가

// 리턴값: 새로운 요소
const newList = personList.map(person => {
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    fullName: person.lastName + person.firstName
  }
});

console.log(newList);
// person: { firstName: "재석", lastName: "유" }
// return: { firstName: '재석', lastName: '유', fullName: '유재석' }

// 좀 더 간단한 방법
const newList2 = personList.map(person => {
  // 기존 데이터에 새로운 프로퍼티 추가
  person.fullName = person.lastName + person.firstName;
  return person; // object를 다시 반환
});
console.log(newList2);