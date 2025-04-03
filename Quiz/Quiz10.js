// 10.

const now = new Date();

now.setHours(now.getHours() + 1);
now.setMinutes(now.getMinutes() + 30);

console.log("1시간 30분 후의 시간:", now.toLocaleString());