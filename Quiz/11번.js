// 11번

// 1) 방문 기록 배열 만들기
const arr = [
  { name: "김철수", date: "2024-08-20", purpose: "회의" },
  { name: "이영희", date: "2024-08-18", purpose: "상담" },
  { name: "박지훈", date: "2024-08-21", purpose: "회의" },
  { name: "최유리", date: "2024-08-19", purpose: "교육" },
  { name: "정민호", date: "2024-08-17", purpose: "상담" }
];

// 2) 방문일을 기준으로 정렬
// sort 함수는 숫자를 기준으로 정렬됨

// 날짜를 계산할 때, 더 늦은날짜 - 더 빠른 날짜 = 양수

// 매개변수: 배열의 인접한 두 요소
// 반환값: 숫자
// sort 함수는 양수가 반환되면 요소를 교체한다
arr.sort((a, b) => {
  console.log(a.date, b.date, new Date(a.date) - new Date(b.date));
  return new Date(a.date) - new Date(b.date);
});

console.log(arr);

// 3) 방문 목적이 '회의'인 기록만 찾기
// 매개변수: value(object)
// 리턴값: boolean
const filterList = arr.filter((obj) => {
  return obj.purpose == '회의';
});

console.log(filterList);


// 4) 필터링된 기록의 날짜를 연도, 월, 일로 변환하여 객체를 반환
// 배열을 새로운 내용으로 변환할 때 -> map 함수
// 기존 객체에서 프로퍼티 제거, 새로운 프로퍼티 추가

// 매개변수: 객체
// 반환값: 새로운 값
const mapList =filterList.map((obj) => {
  const visitDate = new Date(obj.date);
  console.log(visitDate, typeof visitDate);
  // 기존 객체에서 이름과 목적 그대로 가져오기
  return {
    name: obj.name,
    purpose: obj.purpose,
    year: visitDate.getFullYear(),
    month: visitDate.getMonth(),
    date: visitDate.getDate()
  }
});
console.log(mapList);