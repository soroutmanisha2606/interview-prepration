import logo from './logo.svg';
import './App.css';
import Memo from './components/memo hook/Memo';
import Counter from './components/Counter';
import Mydata from './components/mydata';
import Lifecycle from './components/lifecycles/Lifecycle';
import Product from './components/class_component/Class';
import Parent from './components/memo hook/difference_usemomo_and_momo';
import Purecomponents from './components/lifecycles/in class components/Purecomponents';
// import Parent from './components/Use callback/Parent';
import Parent2 from './components/Use callback/Parent';
import Mycom from './components/contextApi/usecontext';
import ChildC from './components/Prop drilling/ChildC';
import Parent3 from './components/Prop drilling/Parent';
import Useref from './components/useref/Useref';
import Usereducer from './usereducer/Usereducer';
import React, { Profiler } from 'react';
import Lazy from './components/Lazy loding/Lazy';
import Counter2 from './middleware and thunk/counter example/Counter';
import Data from './middleware and thunk/counter example/Data';
import { Revise } from './Revise';
import { ReactForms } from './Sde1/ReactForms';
function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log(id,phase,actualDuration,baseDuration,startTime)
  // Aggregate or log render timings...
}
function callback(id,phase,actualDuration){
  console.log("in sencond profiler",id,phase,actualDuration)
}
function App() {
  const [count,setCount] = React.useState(0);
  const [flag,setFlag] = React.useState(false);

   const handleCount=()=>{
setCount(count+1)
setFlag(false);
   }
  return (
    <div className="App">
   {/* example of profiler 1 */}
     {/* <Profiler onRender={callback}>
   <Parent2/>
   </Profiler> */}
   
 {/* example of profiler 2 */}
   {/* <Profiler id='' onRender={onRenderCallback}>
   <Usereducer/>
   </Profiler> */}

<button onClick={()=>setCount(count+1)} >seat1</button>
      <button>seat2</button>
      <button>seat3</button>
      <button>seat4</button>
      <button>seat5</button>
      <button>seat6</button>
      <button>seat7</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
