// 1.

const ch = 'aaabbc';

// a의 개수를 저장할 변수
let count = 0;

for (let i = 0; i < ch.length; i++) {
  if (ch[i] == 'a') {
    count = count + 1;
  }
}
console.log('a의 개수:',count);