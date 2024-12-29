
function reverseAstring(str){
    let rev ='';
    for(let i =str.length-1;i>=0;i--){
        rev+=str.charAt(i)
    }
    // inbuilt
    //return str.split(' ').reverse().join(' ')
  return rev;
}


console.log('reverse a string---',reverseAstring('helo'))

// Find Missing number in An Array
function findMissing(arr){
  //[1 ,2 ,3,5]
  for (let i=0;i<arr.length;i++){
    if(arr[0]!=1){
      return 1;
    }
    if(arr[i]+1!=arr[i+1]){
      return arr[i]+1
    }
  }

}
console.log("find Misising --",findMissing([1,3,4]))




//Check if Two Strings Are Anagrams

function areAnagrams(str1,str2){
  let count =0;
for(let i=0;i<str1.length;i++){
  for(let j=0;j<str2.length;j++){
if(str1.charAt(i)==str2.charAt(j)){
 count++;
}
  }
}
console.log("count-",count)
let s1 = str1.split('').sort().join('');
let s2 = str2.split('').sort().join('');
return s1===s2?true:false
return str1.length==count?true:false;
}
console.log('Are Anagrams--',areAnagrams('mm','mm'));


// Remove duplicates from an array
function removeduplicates(arr){
  let arr2 =[];
for (let i =0;i<arr.length;i++){
  if(arr[i]!==arr[i+1]){
arr2.push(arr[i])
  }
}
// return arr.filter((item, index)=>arr.indexOf(item)===index)
return [...new Set(arr)] //using built In Method

return arr2;

  //[ 1,2 ,2 ,3]
}
console.log('------Duplicates remove ----',removeduplicates([1,2,3,3,7,7,8 ,9]));


// Find the Largest Sum of NOn Adjacent Numbers
function largestNonAdjacent(arr){

  // [ 2, 3,4 ]
  let sum =0;
  for (let i=0;i<arr.length;i++){
    
  sum+=arr[i]
  }

return sum;
}
console.log('array of sum ----',largestNonAdjacent([2, 4, 6, 2, 5]));


// Convert an object to array of kEy Value Pair
function changeArrToOBj(obj){
  let arr=[];
  for(let key in obj){
    arr.push([key,obj[key]])
  }
  return arr;
}
console.log('Arry To OBJ---',changeArrToOBj({name: 'Alice', age: 25}))

