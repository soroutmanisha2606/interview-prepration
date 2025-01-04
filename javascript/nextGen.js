function abc(){
    console.log(this)
};

const sum =()=>{
    console.log(this)
}
// abc();
// sum();
const obj = {
  name: "JavaScript",
  print: function () {
    console.log(this.name);
  },
};
const print = obj.print;
print();
obj.print();
