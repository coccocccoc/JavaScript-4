// Date 객체
// 날짜와 시간을 다루는 객체


// 시스템 현재 시간 가져오기
const now = new Date();
console.log(now); // 6시?

// 특정 날짜와 시간 만들기
// 연도, 월, 일, 시, 분, 초 , 밀리세컨드
// 월은 0이 1월, 1이 2월
const day = new Date(2025, 1, 1, 10, 10, 10, 0);
console.log(day);

// 타임존 적용
console.log(now.toLocaleString());

// 일 변경
now.setDate(10);
console.log(now);
// 시간 변경
now.setHours(18);
console.log(now.toLocaleString());

// 시간을 밀리세컨드 단위로 출력
console.log(Date.now());

// 날짜에서 연도, 월, 일 꺼내기
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
console.log(year);
console.log(month); // 3 => 4월 (0부터 시작하기 때문)
console.log(date);

// 요일 꺼내기
const day2 = now.getDay();
console.log(day); // 3 (0: 일요일, 6: 토요일)

// 날짜에서 시, 분 초 꺼내기
const hour = now.getHours();
const min = now.getMinutes();
const seconds = now.getSeconds();
const ms = now.getMilliseconds();
console.log(hour); 
console.log(min);
console.log(seconds);
console.log(ms);
