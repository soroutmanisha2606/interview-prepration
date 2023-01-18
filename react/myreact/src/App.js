import logo from './logo.svg';
import './App.css';
import Memo from './components/memo hook/Memo';
import Counter from './components/Counter';
import Mydata from './components/mydata';
import Lifecycle from './components/lifecycles/Lifecycle';
import Product from './components/class_component/Class';

function App() {
  return (
    <div className="App">
     
     {/* <Counter/> */}
     {/* <Memo/> */}
     {/* <Lifecycle/> */}
     <Product/>
     {/* <Mydata/> */}
    </div>
  );
}

export default App;
