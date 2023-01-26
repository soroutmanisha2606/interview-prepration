
// const mythrottle=(fn,delay)=>{  
//   return function(){    
//     document.getElementById("btn").disabled=true;
//     setTimeout(() => {
//         fn();
//     }, delay);
//   }    
// }
// var throt=mythrottle(()=>{
//     document.getElementById("btn").disabled=false;
//     console.log("data fetched")
// },5000);


 function mythrot(fn,delay){
  return function(){
    document.getElementById("btn").disabled=true;
    setTimeout(() => {
      fn();
    }, delay);
  }
}
var throt=mythrot(()=>{
  document.getElementById("btn").disabled=false;
  console.log("fetched");
},5000)