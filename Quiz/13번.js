// 13.

// 1) 연락처 Map 생성
const contacts = new Map();

// 데이터 추가
// key, value
// key: "민수" string (회원의 이름)
// value: {} object (회원의 정보)
contacts.set("민수", { phone: "010-1234-5678", address: "서울특별시 강남구" });
contacts.set("지영", { phone: "010-8765-4321", address: "부산광역시 해운대구" });
contacts.set("현우", { phone: "010-2345-6789", address: "대구광역시 수성구" });
contacts.set("수빈", { phone: "010-9876-5432", address: "인천광역시 남동구" });
contacts.set("동민", { phone: "010-3456-7890", address: "광주광역시 서구" });
contacts.set("하은", { phone: "010-6543-2109", address: "대전광역시 유성구" });

// 모든 연락처를 하나씩 출력
console.log("연락처 목록:");
// 구조 분해를 이용하여 배열의 첫번째 요소와 두번째 요소를 분리
// key: 첫번째 요소 저장
// value: 두번째 요소 저장
for (const [key, value] of contacts) {
  console.log(key, value); // [ '', {} ]
}

// 2) 연락처 목록에 "동민"의 연락처가 있는지 확인
if (contacts.has("동민")) {
  // 동민의 연락처가 있다면 전화번호 수정
  // map의 추가와 수정은 set
  // map 안에 "동민"이라는 키가 있다면 수정 처리
  // 없다면 추가 처리
  contacts.set("동민", { phone: "010-9999-9999", address: "광주광역시 서구" });
};

console.log(contacts);

// 3) 연락처 목록에 "지영"의 연락처가 있는지 확인
const userName = '지영';

if (contacts.has(userName)) {
  contacts.delete(userName);
  console.log(`${userName}이 연락처에서 삭제되었습니다.`);
};

console.log(contacts);


// 5) 현재 연락처의 개수 확인
// map의 크기: size
const size = contacts.size;
console.log(`연락처의 개수는 ${size} 입니다`);