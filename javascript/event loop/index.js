//if we are have to fetch then a this fetch function is pushed into the microtask queue
//by the webApi and this queue has more priority then the call back queue which means eventloop
//will first push micotask queue in the call stack
console.log("start");
setTimeout(function set() {
  console.log("set time out fxn")
}, 2000);
async function fetchdata(){
 await fetch("https://api.netflix.com").then( ()=>{
        console.log("fetch function is called");
        })
}

console.log("ended");
// output 
// start
//eneded
//set time out
//fetch fxn is called





///////////////////////////////interview question
//what comes under microtast queue
//all the callback fxns that comes after resolving of promise
