// 숫자 객체

// toString: number -> string 변환
const num1 = 123;
const str = num1.toString();
console.log(typeof num1); // number
console.log(typeof str); // string


let num2 = 10.659;

// toFixed(n): 실수값을 대상으로 소수점 자리를 지정
// n의 자리까지 출력
// 해당 위치에서 반올림된 숫자를 반환
console.log(num2.toFixed(0)); // 10
console.log(num2.toFixed(2)); // 10.66

// toPrecision: 정수와 소수를 포함해서 자리수를 결정
// 해당 위치에서 반올림된 숫자를 반환
// 인자가 없으면 그대로 표시
console.log(num2.toPrecision()); // 10.659
// 정수 2개만 표소
console.log(num2.toPrecision(2)); // 11
// 정수 2개 + 소수 2개 표시
console.log(num2.toPrecision(4)); // 10.66


// 문자열 -> 숫자 변환
const numStr = "-10";
// parseInt는 객체 없이 사용 가능
const num3 = parseInt(numStr); 
console.log(typeof numStr); // "-10" string
console.log(typeof num3); // -10 number


const str2 = '12.33';
const num4 = parseInt(str2);
// parseFloat 대신 parseInt를 썼기 때문에 정수만 변환됨

// 하지만 자료형은 12.33도 number로 취급
console.log(str2, typeof str2); // 12.33 string
console.log(num4, typeof num4); // 12 number


const str3 = '10 year';
const num5 = parseInt(str3);
// 숫자 부분만 변환
console.log(str3, typeof str3); // 10 year string
console.log(num5, typeof num5); // 10 number


const str4 = 'year 10';
const num6 = parseInt(str4);
// 시작 부분이 숫자일때만 변환 가능
// 시작 부분에 숫자가 없으면 NaN(잘못된 숫자라는 의미)
console.log(str4, typeof str4); // year 10 string
console.log(num6, typeof num6); // NaN number


const str5 = '12.33';
// 실수 문자열을 변환할 때는 parseFloat 사용
const num7 = parseFloat(str5);

// 누락된 부분 없이 변환
console.log(str5, typeof str5); // 12.33 string
console.log(num7, typeof num7); // 12.33 number


// isNaN: 해당 문자열이 숫자로 변환 불가능한지 검사
// NaN: 잘못된 숫자를 의미
const result1 = isNaN('aa');
console.log(result1); // true

const result2 = isNaN('100');
console.log(result2); // false