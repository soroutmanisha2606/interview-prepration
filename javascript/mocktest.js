// Scopes and Closures
function createCounter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    };
  }
  const counter = createCounter();
  console.log("counter--",counter)
  counter();
  counter();
  counter();

  //hoisting
console.log(a);
var a = 10;

function test() {
  console.log(b);
  var b = 20;
}
test();


// this keyword
// const obj = {
//     name: "Alice",
//     getName: function () {
//       return this.name;
//     },
//   };
  
//   const getName = obj.getName;
//   console.log(getName());
//   console.log(obj.getName());
  // why ????


  //Prototype inheretance
  function Parent() {
    this.name = "Parent";
  }
  Parent.prototype.greet = function () {
    console.log(`Hello from ${this.name}`);
  };
  
  function Child() {
    this.name = "Child";
  }
  Child.prototype = Object.create(Parent.prototype);
  
  const child = new Child();
  child.greet();
  
  // 
  let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";
console.log(obj1.name);

obj2 = { name: "Charlie" };
console.log(obj1.name);
console.log(obj2.name);

// 
const arr = [1, 2, 3];
const result = arr.map(num => {
    if (num % 2 === 0) {
      return num * 2;
    }
  });
  console.log(result);

  ///
  console.log(typeof null , typeof undefined)
  console.log(null == undefined);
console.log(null === undefined);
console.log(0 == "0");
console.log(0 === "0");

/// Default parameters 
function greet(name = "Stranger") {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Alice");
  greet();

  // obj destructuring 
  const obj = { x: 10, y: 20, z: 30 };
const { x, ...rest } = obj;

console.log(x);
console.log(rest);


// iiffeee
(function() {
    var x = 10;
    console.log(x);
  })();
  console.log(typeof x);

  // sred vs rest 

  const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(numbers);
console.log(newNumbers);

// logical operators
console.log(0 || 1); // 1
console.log(1 && 2);  // 2
console.log(false || "Hello"); // false
console.log(null && "World"); //false

// delete operator
const obj9 = { a: 1, b: 2, c: 3 };
delete obj9.b;
console.log(obj9);

const arr2 = [1, 2, 3];
delete arr2[1];
console.log(arr2);
console.log(arr2.length);


// set and map 
const set = new Set([1, 2, 2, 3]);
console.log(set);

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("a", 3);
console.log(map);
// promises

const promise = new Promise((resolve, reject) => {
    console.log("Promise started");
    resolve("Promise resolved");
  });
  
  promise.then(result => console.log(result));
  console.log("End of script");


  // string methods 
  const str = "JavaScript";
console.log(str.slice(4, 10));
console.log(str.substring(4, 10));
console.log(str.substr(4, 6));

//variaable shadowing
let x1 = 10;

function test() {
  let x1 = 20;
  console.log(x1);
}
test();
console.log(x1);

// Coercion

console.log([] + {});
console.log({} + []);
console.log(true + false);
console.log("5" - 3);


  



  
  
  


  