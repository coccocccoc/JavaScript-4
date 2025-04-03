// JSON, XML: 데이터 형식. 데이터를 전송할 때 사용

// 데이터를 전송할 때 왜 양식이 필요할까?
// C: struct, JAVA: class
// C프로그램 < -- > JAVA프로그램
// 데이터를 표현하는 공통 포맷이 만들어짐: JSON, XML
// 따라서 외부에 데이터를 전송할때는 JSON 또는 XML 형식으로 데이터를 가공하여 보내야 함
// 개발 순서: XML -> JSON


// 자바스크립트 객체 생성
const obj = {
  name: '둘리',
  age: 10
};

// 객체를 JSON 형식의 문자열로 변환
// 왜 변환을 해야할까?
// 외부에서는 자바스크립트의 구조체를 이해할 수 없음

// stringify: object -> json string
// 매개변수: object
// 리턴값: string
const jsonStr = JSON.stringify(obj);
console.log(obj, typeof obj);
console.log(jsonStr, typeof jsonStr);

// 자바스크립트의 객체는 key에 ''를 꼭 안써도 됨



// 자바스크립트 객체 생성
const obj2 = {
  name: "둘리",
  hobby: ['테니스', '축구', '야구']
};

// 객체를 json 문자열로 변환
const jsonStr2 = JSON.stringify(obj2);

console.log(obj2, typeof obj2);
console.log(jsonStr2, typeof jsonStr2);

// 자바스크립트의 객체의 key에는 꼭 ''를 표시할 필요가 없음



// json 형식의 문자열 생성
const str = '{ "name": "둘리", "age": 15, "hobby": ["축구", "야구"]}';

// json string -> javascript object
// 파싱: 문자열의 구조를 분해하여 객체로 생성하는 과정
// 매개변수: string
// 반환값: object
const obj3 = JSON.parse(str);

console.log(str, typeof str);
console.log(obj3, typeof obj3);

// 왜 파싱을 해야할까?
// 원하는 데이터만 추출하기 위해서
// 문자열 데이터는 원하는 부분만 사용할 수 없음
// 하지만 객체는 프로퍼티를 사용하여 원하는 부분만 사용할 수 있음
console.log('사람의 나이:', obj3.age);

// 취미 출력
for (const h of obj3.hobby){
  console.log(h);
};