// // const obj = { // target object
// //     name:'manisha',
// //     age:21
// // };
// // const person= {  // source object
// //     subject:'coding'
// // }
// // const animal = {
// //     animal:"cat"
// // }
// // const arr = [
// //     {name:'aaa',type:'vegetables'},
// //     {name:'aaad',type:'vegetables'},
// //     {name:'goat',type:'meat'},
// //     {name:'goat',type:'meat2'}
// // ]
// // const assign = Object.assign(obj,person ,animal);
// // // console.log('OBJECT ASSIGN',assign);

// // // ENterirs ---> object se array mai convert krta hai in form of key 
// // // console.log(Object.entries(obj))

// // // from Enteries  ---> array se obj
// // // console.log(Object.fromEntries(arr))

// // // intercahnge the key and values 
// // let newObj = {};
// // for(let key in obj){
// //     newObj[obj[key]]=key
// // }
// // // console.log('Intercahnge the values ---',newObj);

// // // console.log('merge two obj',{...obj,...person});

// // // group by avlue s
// // // {'apple': 'fruit', 'carrot': 'vegetable', 'banana': 'fruit'}

// // // console.log('group by--',Object.groupBy(arr,({name})=>name));



// // const input = {'a': 10, 'b': 5, 'c': 8}
// // const threshold = 8
// // // threshold > 8;
// // const ans = Object.keys(input).filter((a)=>input[a]>=8);
// // // console.log(ans);
// // //

// // // 
// // // const ans3 = Object.fromEntries(Object.entries(input).filter(([_,value])=> value>= threshold));
// // // [[a,10],[b,5],[c,8]]
// // // console.log('Obj from Entries',Object.fromEntries(Object.entries(input).filter(([_,data])=> data>=threshold)));

// // // console.log('>>>>',ans3);










// // const flat = {'a': 1, 'b': {'c': 2, 'd': {'e': 3}}};
// // // output --> {a:1,b.c:2,b.d.e:3};;
// // function flatNestedobj(flat){
// //     let newObj = {};
// // for(let key in flat){
// //     if((typeof flat[key])==="object"){
// //        const temp = flatNestedobj(flat[key]);
// //        for (let j in temp){
// //         newObj[key+'.'+j]=temp[j]
// //        }

// //     }else {
// //         newObj[key]=flat[key];
// //     };

// // }
// // return newObj};

// // console.log(flatNestedobj(flat));





// // setTimeout(()=>{
// //     console.log('Set Time Out')
// // },1000);
// // setInterval(()=>{
// //     console.log('set I mmediate --')
// // },100)
// function sum(a,b){
// a=8;
//     console.log('pass by value ----',a+b)
// }
// sum(2,3)
// const obj = {
//     a:'don'
// }
// function refrence(obj){
//     obj.a='mannu';
//   console.log('obj- pass by refernce-',obj)  
// }
// console.log('before calling -',obj)
// refrence(obj);
// console.log('after calling -',obj)


const obj = { a: 1, b: { c: 2 } };
console.log(Object.assign(obj));
const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
// console.log(Object.entries(nestedObj).flat(Infinity))
// { "a": 1, "b.c": 2, "b.d.e": 3 }
function nest(nestedObj){
    let newObj ={};
    for(let i in nestedObj){   

        if(typeof nestedObj[i]==='object' && !Array.isArray(nestedObj[i])){
          let obj = nest(nestedObj[i]);

          for(let j in obj){
            newObj[i+'.'+j] = obj[j]
          }
        }else{
    newObj[i]= nestedObj[i]
        }       
    
    }
    return newObj;
}
console.log('nested Obj--',nest(nestedObj))

// merge two objects 
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
// console.log('merge two arrays-:',Object.assign(obj1,obj2))
function mergerTwo(obj1,obj2){
    const newObj={};
   const obj1keys = Object.keys(obj1);
   const obj2keys = Object.keys(obj2);
   console.log(obj1keys,obj2keys)
    
}
mergerTwo(obj1,obj2);

const students = [
    { name: "Alice", classs: "A" },
    { name: "Bob", classs: "B" },
    { name: "Charlie", classs: "A" }

];
const count=()=>{
    let count =0;

    return 
}
// console.log('GrpuBy-',Object.groupBy(students,({classs})=>classs))