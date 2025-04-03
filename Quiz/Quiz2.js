//2.

// 원본 문자열
let message = '저 친구는 나쁜 친구야. 정말 더러운 사람 같아';

// 금지어 목록
const arr = ['나쁜', '더러운'];

// 문자열 안에 금지어가 포함되어 있는지 확인
for (let word of arr){
  let result = message.includes(word);

  // 메시지에 금지어가 포함되어 있으면 교체
  if (message.includes(word)) {
    // 대상, 새로운 문자열
    message = message.replace(word, 'X'.repeat(word.length));
    // 자리수에 맞게 X를 표시
    // repeat: 개수만큼 텍스트를 반복해서 출력
  }
}
console.log(message);