//pure components ka kaam hota hai ager humaare state ki value same hai input or output dono mai 
//to baar baar change karne ki jigha hum pure components ka use kar lenge taki ek baar hi render ko na ki baar baar


import React, { Component,PureComponent } from 'react'

export default class Purecomponents extends PureComponent {
 constructor(){
    super()
 this.state={
        data:10

    }
 }
 
  render() {
    console.warn(this.state)
    return (<>
      <div>Purecomponents -{this.state.data}</div>
      <button onClick={()=>this.setState({data:20})}>update</button>
      </>
    )
  }
}
////