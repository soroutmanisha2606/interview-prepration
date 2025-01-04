// NESTED TASK EVENT LOOP 
/*console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
  setTimeout(() => {
    console.log("setTimeout 2");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise inside setTimeout 1");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");*/




// Question 2 Mixed MicroTask and Macro Task Quesue

/*console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside setTimeout 1");
  });

  setTimeout(() => {
    console.log("setTimeout inside setTimeout");
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");

*/


// using setImmediate 
/*
console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
*/


/// MOre question 

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");

  Promise.resolve().then(() => {
    console.log("Promise 2");
  });

  console.log("After Promise 1");
});

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

console.log("End");




// ADDING TASK DYNAMICALLY
// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout 1");

//   setTimeout(() => {
//     console.log("setTimeout 2");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("Promise inside setTimeout 1");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");

//   setTimeout(() => {
//     console.log("setTimeout inside Promise 1");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("Promise 2 inside Promise 1");
//   });
// });

// console.log("End");
