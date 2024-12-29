// Add and update properties
let car = { brand: "Toyota", model: "Corolla" };
car['year'] = 2020;
car.model = 'Camry';
console.log('updated Obj-',car)



// Access nested objects:
let user = {
    name: "John",
    address: {
      city: "New York",
      zipcode: 10001,
    },
  };
console.log('City-',user.address.city)  
console.log('Zipcode-',user.address.zipcode)




// Write a function hasProperty(obj, prop) that takes an object and a property name as arguments and returns true if the property exists in the object, otherwise false.
function hasPropertyy(obj,prop){
    return prop in obj;
}
const ans = hasPropertyy({age:'12'},'e')
console.log('ans-',ans)



// Intermediate Level
//Write a function that iterates over the keys and values of the following object and prints them:
let book = { title: "1984", author: "George Orwell", year: 1949 };
function bookIrtate(obj){
   for(let book in obj){
    // console.log('book-',book)
    console.log(book , obj[book])
   } 

}
console.log(bookIrtate(book))


//Write a function to merge two objects into a single object. For example:
function merge(obj1, obj2){
  let result ={}
for (let key in obj1){
result[key]=obj1[key]
}
for (let key in obj2){
  result[key]=obj2[key]
}
return Object.assign(obj1,obj2)
return result

  return {...obj1,...obj2}
}
const ans2 = merge({ a: 1, b: 2,d:{j:0,k:0} },{ b: 3, c: 4 });
console.log("---Here is my merge two obj",ans2);



// Count object properties:
function countProperties(obj){
return JSON.parse(obj)
}


// // Clone an object:
// function cloneOBJ(obj){
// return JSON.parse(obj)
// }
// const clone = cloneOBJ({a:'hj',b:1});
// console.log("clone ---",clone)

// Write a function that takes an object as input and finds the most frequently occurring value among its properties:
function mostFrequentlyOccouring(obj){

}

//Write a function to sort an object by its keys alphabetically and return the sorted object:
function sortObj(obj){
  return 
}

// convert object to array
function objToArray(obj){
  let ans =[];
  for(let key in obj){
    ans.push([key,obj[key]])
  }
  return ans;
  // return ans;
  //return Object.entries(obj);
  // [name,age]
  return Object.keys(obj).map((key)=>[key,obj[key]])

}
console.log('Object----',objToArray({ name: "Alice", age: 25 }))

//Find a key by value:
function findKeyByValue(obj,value){
  return Object.keys(obj).filter((key)=>obj[key]===value)
}

//{ name: "Alice", age: 25 };
// 
const findByVal = findKeyByValue({name:"a",age:23},'age')
console.log(';;;;;;;;findByVal',findByVal)

/// sort on obj by keys
function sortAnObj(obj){
  //{ c: 3, a: 1, b: 2 }
  const sortedObj ={};
  const keys= Object.keys(obj).sort();
  console.log('keys---',keys)
  //[a,b,c];
  

  for(let key of keys){
    console.log('key----',key)
    sortedObj[key]= obj[key]
  }
  return sortedObj
}
console.log("sorting an obj by a key -",sortAnObj({ c: 3, a: 1, b: 2 }));

















//////// FIND A KEY BY VALUE
const findValueByKey =(obj,val)=>{
  //{ name: "Alice", age: 25 }
  // [name , age]
  // obj[]
const values = Object.keys(obj).filter(key=>obj[key]===val);
console.log("values<<<<>>>>>>>>--",values);
// [{age}]
return values.length?values[0]:null

}
console.log('FIND KEY BY VALUE-----',findValueByKey({name:'manihsa',age:21},'manihsa'))