// const fruits = [
//   { name: "apple", price: 200, status: "avilable" },
//   { name: "orange", price: 300, status: "Unavilable" },
//   { name: "kiwi", price: 400, status: "avilable" },
// ];

// console.table(fruits);
// fruits.pop();
// fruits.unshift("kiwi");
// fruits.shift();
// fruits.push("apple");
// fruits.slice(0, 1);
// console.table(fruits);

// const person = [1, 2, 3, 4, 5];
// console.log(person);

// // const division = document.getElementsByClassName("kiran");

// // division[2].style.backgroundColor = "red";

// let uniquN = [];

// for (let i = 0; i < 50; i++) {
//   if (i % 2) {
//     uniquN.push;
//   }
// }
// console.log(uniquN);

// const country = ["nepal", "india", "china", "pakistan"];
// const val = Array.country;
// console.log(val);
// console.log(country);

// Interpreters vs compilers
// Call stack and memory heap
// Javascript Runtime environment
// Object-oriented Programming (OOP):

// Functional Programming (FP):

// DOM Manipulation with Project 1

// const a = {
//   //properties
//   name: "kiran",
//   sing: () => {
//     console.log("Kiran can sing");
//   },
// }; // literal
// console.log(a.sing());

// const person = () => {
//   const bio = () => {
//     return " has a height of aand likes to sing";
//   };
//   return bio;
// };
// const per = person();
// console.log(per());
// // const b= new Object();//constructort

// Class in Javascript

// First crate the oject in the class

// class Fruit {
//   constructor() {
//     console.log("I am inside the constructor");
//   }
//   bio() {
//     return " inside the biog";
//   }
//   si;
// }

// const obj = new Fruit();
// // console.log(typeof Fruit);
// // console.log(typeof Fruit);

// This keyword

// class Fruit {
//   constructor(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;

//     console.log();
//   }
//   bio() {
//     console.log(`${this.firstName}, ${this.age}`);
//   }
// }

// const obj = new Fruit("kiran", 28);
// obj.bio();
// // function a() {
// //   console.log(this);
// // }

// // a();
// let name = "kiran";
// const sayHello = (greeting) => {
//   return `${greeting} from ${name}`;
// };
// console.log(sayHello("hola"));

// // Higher order function // taking parameters

// function greet(name, callback) {
//   console.log("hellow", name);
//   callback();
// }

// // greet("john");

// function sayHello() {
//   console.log("hellow again");
// }

// greet("kiran", sayHello);

//recurson /// stopping at certain stage
// let sum = 0;
// let myArray = [3, 5, 8];
// const calculateSum = () => {
//   console.log(`sum is ${sum} and Myarray length is ${myArray.length}`);
//   if (myArray.length) {
//     //calculating lenght of array and adding it by pop mehtod
//     sum = sum + myArray.pop();

//     calculateSum(myArray);
//   }
//   return sum;
// };
// console.log(calculateSum());

// const myDocument = document.getElementById("first");

// const info = document.getElementsByClassName("info1");
// console.log(info);

// setTimeout(() => elem.style.background="green", 3000)

//QuerrySelector
// const elem = document.getElementsByClassName(`info1`);
// console.log(elem.innerHTML);
// const first = document.querySelectorAll(`ul>li:last-child`);
// // console.log(first);
// // for (i -= 0; i < kiran.length; i++) {
// //   console.log(first[i].innerHTML);
// // }

// for (let item of kiran) {
//   console.log(kiran[item.innnerHTML]);
// }
// // console.log(first);

// const elem = document.querySelector(`#display`);

// elem.innerHTML = "heloow for the wole d dia  a ";
// console.log(elem);
console.log(document);
const elm = document.getElementById("first");

const text = elm.innerHTML;
console.log(text);

const reverse = document.getElementsByClassName("reverse");

reverse.addEventListener("click", (kiran) => {
  const textGrab = reverse.innertext;
  const kiran = textGrab.reverse(textGrab.split);
  return kiran;
});
