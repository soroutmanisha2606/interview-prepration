// var and let coding soluntion
let z = 30;
if (true) {
    var z1 = 40; // Is this valid?
    console.log(z);
}


// QUES 2
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(`var i: ${i}`), 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(`let j: ${j}`), 1000);
}

/// 3
function outerFunction() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
     // What happens?
    console.log(b); // What happens?
    console.log(c); // What happens?
    onsole.log(a);
}
outerFunction();

// QUES 4

(function() {
    var x = 100;
    let y = 200;
    console.log(x); // What will this log?
    console.log(y); // What will this log?
})();
// console.log(typeof x); // What happens here?
// console.log(typeof y); // What happens here?

/// 4
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

console.log(x); // What happens here?
var x = 10;

console.log(y); // What happens here?
let y1 = 20;


for (var i =0;i<2;i++){
    (function(i){
        setTimeout(()=>{
            console.log("i--",i)
        })
    })(i)
    
}
var x = 1;
{
    var x = 2;
}
console.log(x); // Output?

var c = 10;
if (true) {
    let c = 20;
    console.log(c); // Output?
}
console.log(c); // Output?
console.log(typeof x); // Output?
console.log(typeof y); // Output?
var x = 10;
let y = 20;

function testScope() {
    console.log(a); // What happens?
    var a = 5;

    console.log(b); // What happens?
    let b = 10;
}
testScope();







function abc(){
    console.log(this)
};

const sum =()=>{
    console.log(this)
}
// abc();
// sum();
const obj = {
  name: "JavaScript",
  print: function () {
    console.log(this.name);
  },
};
const print = obj.print;
print();
obj.print();


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();


