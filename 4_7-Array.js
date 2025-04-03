// 상품 관리 프로그램 구현하기

// 상품 목록
const products = [
  { name: "스마트폰", price: 799000, category: "전자제품" },
  { name: "노트북", price: 1200000, category: "전자제품" },
  { name: "헤드폰", price: 150000, category: "전자제품" },
  { name: "키보드", price: 100000, category: "액세서리" },
  { name: "마우스", price: 50000, category: "액세서리" },
  { name: "충전기", price: 30000, category: "액세서리" },
  { name: "블루투스 스피커", price: 90000, category: "전자제품" }
];


// 상품의 가격을 기준으로 오름차순 정렬
// 오름차순: 작은 -> 큰

// 함수의 매개변수: 배열의 인접한 두 요소
// 함수의 리턴값: 숫자
// sort 함수의 규칙: 양수가 반환되면 위치를 교체
products.sort((a, b) => {
  // console.log('a', a);
  // console.log("b", b);
  return a.price - b.price;
});
console.log(products);


// 가격이 5만원 이상, 
// 50만원 이하이고,
// 카테고리가 '전자제품'인 상품 찾기

// 1. price
// 2. category

// 함수의 매개변수: value, index, array
// 함수의 리턴값: boolean
// 결과가 true면 요소를 유지, false면 제거
const result = products.filter((obj) => { 
  return obj.price >= 50000 && obj.price <= 500000 && obj.category == '전자제품';
});

console.log(result);



// 상품 가격에 형식 표시하기
// 10000 => 10000원

// sort: 정렬
// filter: 제거
// map: 내용 변경 <-
// reduce: 누적값

// 함수의 매개변수: value, index, array
// 함수의 리턴값: 새로운 값
// 상품명과 카테고리는 유지
// 상품 가격만 교체
const newArr = products.map((obj) => {
  console.log('변환 전:', obj);
  obj.price = obj.price + '원';
  console.log("변환 후:", obj);
  return obj; // 기존 데이터를 다시 반환
});
console.log(newArr);

// 문자열 안에 변수 넣기
const newArr2 = products.map((obj) => {
  // 변수 ${}
  obj.price = `${obj.price}원`;
  return obj;
});
console.log(newArr2);
