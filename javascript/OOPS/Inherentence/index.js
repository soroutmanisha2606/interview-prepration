class Car{
    constructor(n,b){
        this.name=n;
        this.brand=b;
    }
    print(){
        console.log(this.name ," ",this.brand);
    }
}
class SUV extends Car{
    constructor(x,y){
        super(x,y);
        this.buyer='manisha';
        this.data="all data"
        
    }
}
var car1=new SUV('nano','audi');
console.log(car1);
class TATA extends SUV{
    constructor(d,e){
        super(d,e);
        this.type='mini-suv';
    }
}
var car2=new TATA('duster','renault',"data");
console.log(car2);