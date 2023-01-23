import logo from './logo.svg';
import './App.css';
import Memo from './components/memo hook/Memo';
import Counter from './components/Counter';
import Mydata from './components/mydata';
import Lifecycle from './components/lifecycles/Lifecycle';
import Product from './components/class_component/Class';
import Parent from './components/memo hook/difference_usemomo_and_momo';
import Purecomponents from './components/lifecycles/in class components/Purecomponents';

function App() {
  return (
    <div className="App">
     
     {/* <Counter/> */}
     {/* <Memo/> */}
     {/* <Lifecycle/> */}
     {/* <Product/>  */}
     {/* <Parent/> */}
     {/* <Mydata/> */}
     <Purecomponents/>
    </div>
  );
}

export default App;
