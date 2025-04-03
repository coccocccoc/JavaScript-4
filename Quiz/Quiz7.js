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
  { name: "오지호", score: 80, gradeLevel: "3학년" }
];

// 2) 성적에 따라 학생에게 "A", "B", "C" 등급 추가
// A: 90 이상, B: 70 ~ 89, C: 70 미만
const studentGrade = students.map((student) => {
  if (student.score >= 90) {
    grade: 'A'
  } else if (student.score >= 70) {
    grade: 'B'
  } else {
    grade: 'C'
  }
  return student;
});
console.log(studentGrade);

// 3) 성적을 기준으로 내림차순 정렬
students.sort((a, b) => {
  return b.score - a.score;
});
console.log("정렬된 학생 목록:", students);

// 4) 1학년 학생 중에서 등급이 "B"인 학생들을 찾아 점수 총 합을 계산