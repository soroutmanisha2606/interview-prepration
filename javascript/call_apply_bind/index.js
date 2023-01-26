//https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples
const name1={
    firstname:"manisha",
    lastname:"sorout",
    printname:function(hometown,state){
        console.log(this.firstname+" "+this.lastname+" "+"from"+" "+hometown+" "+state);
    }
}
name1.printname("up","updtae");
const name2={
    firstname:"atul",
    lastname:"khanna"
}
//call method is used to call a function on other object 
name1.printname.call(name2,"lohina","state2");
//apply method if we want to pass more arguments then we have to pass in form of array
name1.printname.apply(name2,["hello","lucknow"]);
//bind method is used to store copy of an object
const arr2=name1.printname.bind(name2,"bind_town","bind_state");
console.log(arr2)





///more examples
function car(type,fueltype){
    this.type=type,
    this.fueltype=fueltype
}
function nano(){
    car.call(this,"small","pertrol");
    this.brand="tata"
    console.log("second examples",this)
}
// nano();
function audi(){
    car.call(this,"super","cng");
    this.name="audi super",
    this.price="90 lakh"
   console.log(this);
}
// audi()
///////by using apply 
function sweet(taste,price){
    this.taste=taste,
    this.price=price
}
function barfi(){
    sweet.apply(this,["yummy","200"]);
    console.log(this)
}
function laddo(){
    sweet.apply(this,new Array("so sweet","100"));
    this.color="yellow"
    console.log(this);
}
laddo();
////by using bind method..........
const bindobj={
    name:"manisha",
    age:21,
    bloodgroup:"A+",
    newfxn:function(){
        console.log(this.name+"-------")
    }
}
function newbindobj2(){
   
}
const newarr=bindobj.newfxn.bind(newbindobj2,"manishahhaaa");
console.log(newarr());
