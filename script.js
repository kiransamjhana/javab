const fruits = [
  { name: "apple", price: 200, status: "avilable" },
  { name: "orange", price: 300, status: "Unavilable" },
  { name: "kiwi", price: 400, status: "avilable" },
];

console.table(fruits);
fruits.pop();
fruits.unshift("kiwi");
fruits.shift();
fruits.push("apple");
fruits.slice(0, 1);
console.table(fruits);

const person = [1, 2, 3, 4, 5];
console.log(person);

const division = document.getElementsByClassName("kiran");

division[2].Style.backgroundColor = "red";
