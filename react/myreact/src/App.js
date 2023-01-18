import logo from './logo.svg';
import './App.css';
import Memo from './components/memo hook/Memo';
import Counter from './components/Counter';
import Mydata from './components/mydata';
import Lifecycle from './components/lifecycles/Lifecycle';

function App() {
  return (
    <div className="App">
     
     {/* <Counter/> */}
     {/* <Memo/> */}
     <Lifecycle/>
     {/* <Mydata/> */}
    </div>
  );
}

export default App;
