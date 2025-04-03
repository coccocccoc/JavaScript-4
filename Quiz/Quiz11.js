// 11.

// 1) 방문 기록 배열 만들기
const visits = [
  { name: "김철수", date: "2024-08-20", purpose: "회의" },
  { name: "이영희", date: "2024-08-18", purpose: "상담" },
  { name: "박지훈", date: "2024-08-21", purpose: "회의" },
  { name: "최유리", date: "2024-08-19", purpose: "교육" },
  { name: "정민호", date: "2024-08-17", purpose: "상담" }
];

// 2) 방문 날짜를 기준으로 배열을 오름차순으로 정렬
visits.sort((a, b) => {
  return a.date - b.date;
});
console.log(visits);

// 3) 방문 목적이 "회의"인 기록만 필터링
const purpose = visits.filter((value) => {
  return value.purpose == "회의";
});
console.log('회의 목적의 방문 기록:', purpose);

// 4) 필터링된 기록의 날짜를 연도, 월, 일로 변환하여 객체를 반환
const date = new Date(purpose.purpose);
purpose.map((value) => {
  return purpose.name;
});