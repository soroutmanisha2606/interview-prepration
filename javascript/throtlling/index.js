
const mythrottle=(fn,delay)=>{
  
  return function(){    
    document.getElementById("btn").disabled=true;
    setTimeout(() => {
        fn();
    }, delay);
  }
    
}
var throt=mythrottle(()=>{
    document.getElementById("btn").disabled=false;
    console.log("data fetched")
},5000);