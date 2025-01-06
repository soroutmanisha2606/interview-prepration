function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
//   const fn1 = outer();
//   const fn2 = outer();
  
//   fn1(); // ? 1
//   fn1(); // ? // 2
//   fn2(); // ?
//   fn2(); // ?

  function timer(n) {
    // Your code here
   
        for (let i =1 ;i<=n;i++){
          setTimeout(()=>{
            console.log(i)
          },i*1000)  
        }
 
  }
  
  timer(5);
  // Output: 1 (after 1 sec), 2 (after 2 secs), ..., 5 (after 5 secs)
  
  