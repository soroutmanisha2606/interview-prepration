// closure ---> is a function that has access to the variables in its 
function counter(){
    let count =0;
    return ()=>{
        return count++;        
    }
}
let output = counter();
console.log('console',output());
console.log('ouptput2--',output());

/// reverse string 
function isPalindrome(str){
    let revstr ='';
    for(let i=str.length;i>=0;i--){
        revstr+=str.charAt(i);
    }
    return revstr == str?true:false;

}
console.log(isPalindrome('hello'));

// rect app
 const myapp=()=>{
    console.log('log1')
    return ()=>{
        console.log('log2')
return ()=>{
    console.log('log3')
    return () =>{
 console.log('log4')
    }
}
    }
 }
 const ans = myapp();
 ans()()() //cunning 



 ////---->>>>
//  
// factorial of a number 
function findtheFact(n){
if(n==0||n==1) return ;
else findtheFact(n-1)+findtheFact(n-1);
}
console.log(findtheFact(3));
