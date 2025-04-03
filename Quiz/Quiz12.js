// 12.

// 1) 읽은 책 목록을 Set 객체로 생성
const bookList = new Set();
bookList.add('해리포터');
bookList.add("반지의 제왕");
bookList.add("어린왕자");
bookList.add("데미안");
bookList.add("1984");
bookList.add("위대한 개츠비");

console.log('현재 읽은 책 목록: ');
bookList.forEach((value) => {
  console.log(value);
});


console.log('');


// 2) 제목이 7글자 이상인 책을 삭제
bookList.forEach((value) => {
  if (value.length >= 7) {
    bookList.delete(value);
    console.log(`${value}을(를) 책 목록에서 삭제했습니다.`);
  }
});


console.log('');


// 3) 친구가 읽은 책 목록을 Set 객체로 생성
const friendBookList = new Set();
friendBookList.add('어린왕자');
friendBookList.add("1984");
friendBookList.add("노인과 바다");
friendBookList.add("그리스인 조르바");


// 4) 내가 읽은 책 목록과 친구가 읽은 책 목록을 각각 출력
console.log('친구가 읽은 책 목록: ');
bookList.forEach((value) => {
  console.log(value);
});


console.log("");


// 5) 나와 친구가 공통으로 읽은 책을 찾아서 출력
console.log('두 명의 사용자가 공통으로 읽은 책: ');

const commonBook = new Set();

for (let book of bookList) {
  if (friendBookList.has(book)) {
    commonBook.add(book);
  }
};
commonBook.forEach((value) => {
  console.log(value);
});