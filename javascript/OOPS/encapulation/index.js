//
//if we want to keep some data as private then we use encapsulation




class Car{
    #data2;
   // #name;//here i don't want to access my name by any one so i will make it as private by simply using the encapsulation 
    //# but it will present in data
    constructor(a,b){
        this.name=a;
        this.type=b;  
        this.#data2=100;     
    }
    print(){
        console.log(this.name," ",this.type);
    }
}
let ans=new Car('audi','fuel');
console.log(ans);
