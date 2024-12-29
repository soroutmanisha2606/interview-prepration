// Object Creation By Object literals
let obj1 = {
    age:21,
    dob:'26/06/01'
}
// object assign 
console.log(Object.assign({name:'class'}))
obj1['name']='mannu don';
obj1.name='manna'
delete obj1.name;
const {dob , ...newobj2} = obj1
console.log('OBJ1 ---',obj1)
console.log('newobj2',newobj2)



let user = {
    name:'hllen',
    class: 12,
    sub: 'English'
}

console.log(user.name)



// Ways to itrate over the whole js obj 
for( key in user){
    console.log(user[key])
}
// for(let key of user){
//     console.log('key---',key);
//     console.log('user--',user)
// }