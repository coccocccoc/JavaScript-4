// 4.
const fruits = ['apple', 'banana', 'grape', 'kiwi', 'watermelon'];
const newArr = [];
for (let i = 0; i < fruits.length; i++){
  if (fruits[i].length > 5) {
    newArr.push(fruits[i])
  };
};
console.log(newArr);

// 5.
console.log(fruits.toString().toUpperCase());

// 6.
const upperCase = [];
for (let i = 0; i < fruits.length; i++){
  if (fruits[i].length > 5) {
    upperCase.push(fruits[i].toUpperCase());
  };
};

console.log(upperCase);