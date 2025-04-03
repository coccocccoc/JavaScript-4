// 날짜를 특정 패턴으로 출력하기
const now = new Date();
console.log(now);

// 2025-4-2
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
console.log(year, '-', month + 1, '-', date); // 2025 - 4 - 2

// 15:44:00
const hour = now.getHours();
const min = now.getMinutes();
const second = now.getSeconds();
const time = hour + ':' + min + ':' + second;
console.log(time); // 15:46:13


// 날짜 계산
// 오늘부터 10일 후의 날짜 구하기
const curDate = now.getDate();
now.setDate(curDate + 10);

// 시간에 타임존 적용
console.log(now.toLocaleString());