// 14.

// 1) 학생 목록을 Map 객체로 생성
const students = new Map();
students.set('김민준', { grade: '2학년', major: '컴퓨터공학' });
students.set("이서윤", { grade: "3학년", major: "경영학" });
students.set("박지호", { grade: "1학년", major: "물리학" });
students.set("최지민", { grade: "4학년", major: "화학" });
students.set("정예린", { grade: "2학년", major: "수학" });
students.set("한지우", { grade: "3학년", major: "영어영문학" });

console.log('학생 목록:')
students.forEach((a, b) => {
  console.log(b + ':', a.grade + ',', a.major);
});


console.log("");


// 2) 3학년 학생들의 전공을 모두 융합공학으로 변경
// students.forEach((a, b) => {
//   if (a.grade == '3학년') {
//     a.major.set('융합공학');
//   }
// });
// console.log(students);



// 3) 이름이 "정예린"인 학생이 있다면, 해당 학생의 정보를 출력
students.forEach((a, b) => {
  if (b == '정예린') {
    console.log(b + ":", a.grade + ",", a.major);
  }
});


// 4) 각 학년별로 몇 명의 학생이 있는지 계산하고, 출력
