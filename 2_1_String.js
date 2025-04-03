// String 객체
// String 객체가 제공하는 함수 알아보기!

// 문자열의 길이
let text = "ABCDE";
console.log(text.length); // 5

// 특정 문자열이 포함되어있는지 확인
// indexOf: 특정 문자열의 시작 index를 반환
let str = '안녕하세요 저는 둘리입니다';
console.log(str.indexOf('둘리')); // 9
console.log(str.indexOf('또치')); // 특정 문자열이 포함되어있지 않으면 -1

// lastIndexOf: 검색 대상이 여러개 있으면 제일 마지막에 있는 문자열의 시작 index(위치)를 반환
let str2 = "둘리 둘리 둘리";
console.log(str2.lastIndexOf('둘리')); // 6
console.log(str2.lastIndexOf('또치')); // 없으면 -1

// slice: 문자열에서 특정 부분만 잘라서 반환
let fruit = "사과, 바나나, 키위";
console.log(fruit.slice(9, 11)); // 시작 위치, 마지막 위치(포함x)
// 위의 index: 10 => 키위를 추출하려면 마지막 위치는 10 + 1

// 마지막 index가 없으면 맨 끝까지 읽음
console.log(fruit.slice(9)); // 키위

// substring: slice처럼 문자열을 자르는 함수
console.log(fruit.substring(9, 11)); // 키위
// 시작 위치와 마지막 위치가 반대로 되어 있으면 자동으로 교체
console.log(fruit.substring(11, 9)); // 키위

// replace: 특정 문자열을 교체하는 함수
// 대상, 새로운 문자열
console.log(fruit.replace('바나나', '딸기')); // '바나나'를 '딸기'로 교체

let hello = "Hello World";

// 대소문자 변환
console.log(hello.toLowerCase()); // hello world
console.log(hello.toUpperCase()); // HELLO WORLD

// concat: 문자열을 연결하는 함수
let string1 = 'hello';
let string2 = 'world';
let newStr = string1.concat(string2);
console.log(newStr); // helloworld

// trim: 문자열의 앞뒤 공백을 제거
// string 값으로 string 객체의 함수를 사용!
console.log("    hello world    ".trim()); // hello world

// pad~(): 자리수를 채우는 함수
// 자리수, 자리를 채울 문자
let number = "5";
console.log(number.padStart(4, 0)); // 0005
console.log(number.padEnd(4, 0)); // 5000

// charAt: 특정위치에 있는 문자 하나 추출
console.log("hello world".charAt(2)); // l

let birthday = '1997-06-12';

// split: 구분자를 기준으로 문자열을 자르는 함수
// -: 구분자
console.log(birthday.split('-')); // [ '1997', '06', '12' ]

let url = 'http://website.com';
// startsWith: 특정 문자열로 시작되는지 확인하는 함수
if (url.startsWith('http://')) {
  console.log('올바른 형식의 사이트 주소입니다.');
} else {
  console.log('잘못된 형식의 사이트 주소입니다.');
}

let fileName = 'abc.pdf';
// endsWith: 특정 문자열로 끝나는지 확인하는 함수 
if (fileName.endsWith('.pdf')) {
  console.log('pdf 파일이 맞습니다')
} else {
  console.log('pdf 파일이 아닙니다')
}

// string은 배열처럼 사용할 수 있다
// 인덱스를 사용하여 문자를 하나씩 추출
let str4 = 'hello';
// console.log(str4[0]); // h
// console.log(str4[1]); // e
// console.log(str4[2]); // l
// console.log(str4[3]); // l
// console.log(str4[4]); // o

// for 요소를저장할변수 of 배열(또는 string)
for (const ch of str4){
  console.log(ch);
}

// repeat: 문자열을 반복하는 함수
console.log("a".repeat(5)); // aaaaa
console.log("abc".repeat(2)); // abcabc