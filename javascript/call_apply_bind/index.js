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
//apply method if we want to pass more arguments then we have to pass in form 
name1.printname.apply(name2,["hello","lucknow"]);
//bind method is used to store copy of an object
const arr2=name1.printname.bind(name2,"bind_town","bind_state");
console.log(arr2)



