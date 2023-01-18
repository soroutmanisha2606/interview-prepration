import React from "react";
class Product extends React.Component{
    //state should be initiated in a constructor function which will be present inside the class component itself
    constructor(){
        super();
        this.state  ={
            name:"manisha",
            count:0
        }
        this.newstate={
            data:10
        }
    }
  
    //super() is used inside the constructor function so that your component can access all the methods of the parent component as well.
    render(){
        return(
            <div>
                <h1>this a class component</h1>
                <h2>{this.state.name}</h2>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>increse the count--{this.state.count}</button>
                <button onClick={()=>{this.setState({data:this.newstate.data+10})}}>second button of class ---{this.newstate.data}</button>
            </div>
        )
    }
}
export default Product;