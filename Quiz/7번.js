// 7.

// 1) 학생 목록 배열 생성
const students = [
  { name: "김철수", score: 85, gradeLevel: "1학년" },
  { name: "이영희", score: 92, gradeLevel: "2학년" },
  { name: "박지훈", score: 76, gradeLevel: "3학년" },
  { name: "최유리", score: 88, gradeLevel: "1학년" },
  { name: "정민호", score: 54, gradeLevel: "1학년" },
  { name: "한서연", score: 63, gradeLevel: "2학년" },
  { name: "장동건", score: 71, gradeLevel: "3학년" },
  { name: "오지호", score: 80, gradeLevel: "3학년" },
];


// 2) 학생의 성적에 따라 등급 추가하기
// 점수가 90점 이상이면 A
// 점수가 70점 이상이면 B
// 점수가 70점 미만이면 C

// 학생 객체에 등급을 추가하여 새로운 배열 생성
// 매개변수: 학생객체
// 리턴값: 새로운 값
const mapList = students.map((obj) => {
  // 학생의 이름, 점수, 학년은 그대로이고 등급만 추가
  if (obj.score >= 90) {
    obj.level = 'A'; // 기존 객체에 새로운 프로퍼티 추가
  } else if (obj.score >= 70) {
    obj.level = 'B';
  } else {
    obj.level = "C";
  }
  return obj;
});

console.log(mapList);


// 4) 1학년 학생 중에서 B등급인 학생들을 찾아 점수 총합을 계산
// 함수의 매개변수: 학생 객체
// 함수의 리턴값: boolean
const filterList = mapList.filter((obj) => {
  return obj.gradeLevel == "1학년" && obj.level == "B";
});
console.log(filterList);

// 점수 총 합 구하기
// 누적값 -> reduce

// 인자: 함수, 초기값
// 초기값 설정이 없으면 배열의 첫번째 요소로 설정됨
// 함수의 매개변수: 누적값, 배열의 현재 요소
// 누적값을 0으로 초기화
const result = filterList.reduce((preValue, curValue) => { 
  console.log("preValue", preValue);
  console.log("curValue", curValue.score);
  return preValue + curValue.score;
}, 0);

console.log(result);