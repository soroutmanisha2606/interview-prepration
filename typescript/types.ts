// enum 
enum Abc {
    yp=1,
    Down
}
console.log(Abc , 'cdhcjgd')

function sumArray(numbers:number[]):number{
return numbers.reduce((sum,num)=>sum+num,0)
}

console.log(sumArray([1,2,3]))

interface abc  {
name:string,
age:number
}
interface abc{
    roll_no:string
}
const my:abc = {
name:'maniha',
age:21,
roll_no:'78'
}