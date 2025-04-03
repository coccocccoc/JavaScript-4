// 12.

// 1) 읽은 책 목록을 Set 객체로 생성
const readBooks = new Set();
readBooks.add("해리포터");
readBooks.add("반지의 제왕");
readBooks.add("어린왕자");
readBooks.add("데미안");
readBooks.add("1984");
readBooks.add("위대한 개츠비");

// 읽은 책 목록 출력
console.log("현재 읽은 책 목록: ");
// set은 데이터를 추가할 때 순서가 없음
// 따라서 index가 없음
// for-of문 사용
for (const book of readBooks){
  console.log(book);
};


// 2) 책 목록 중에서 제목의 크기가 7 이상이면 삭제

// set을 순회하면서 책을 하나씩 꺼내기
for (const book of readBooks) {
  // console.log(book, book.length);
  if (book.length >= 7) {
    // 해당 책을 삭제!
    readBooks.delete(book);
    console.log(`${book}이(가) 목록에서 삭제되었습니다.`);
  }
};


// 3) 두번째 회원이 읽은 책 목록 생성
const readBooks2 = new Set();
readBooks2.add("어린왕자");
readBooks2.add("1984");
readBooks2.add("노인과 바다");
readBooks2.add("그리스인 조르바");


// 5) 두 회원이 읽은 책을 비교해서 공통으로 읽은 책 찾기

// 공통으로 읽은 책을 담기 위한 set 생성
const commonBooks = new Set();

// 두번째 회원의 리스트를 순회하며 데이터를 하나씩 꺼내서 첫번째 회원의 리스트에 데이터가 포함이 되어있는지 확인
// 두번째 회원의 책 목록을 순회(4번)
for (const book of readBooks2) {
  // console.log("첫번째 회원의 책 목록:", readBooks);
  // console.log("두번째 회원의 책:", book);
  // console.log(readBooks.has(book));

  // 책이 포함이 되어있으면 commonBooks에 추가
  if (readBooks.has(book)) {
    commonBooks.add(book);
  }
};
console.log('두 명의 사용자가 공통으로 읽은 책:', commonBooks);

