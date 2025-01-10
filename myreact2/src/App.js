import React from 'react';
import './App.css';
import AddOrRemoveItem from './components/addOrRemoveItem';
import CharacterCount from './components/CharacterCount';
import HidePara from './components/hidePara';
import ThemeContext from './components/Mycontext/themeContext';
import Toggleseats from './components/react toggle/toggleseats';
import ToggleText from './components/react toggle/toggletext';
import ThemeToglle from './components/themeToglle';
import ThemeProvider from './components/Mycontext/themeProvider';
import Timer from './components/Timer';
import ReactForms from './components/ReactForms';
import ReactIteamLists from './components/ReactIteamLists';
import Counter from './components/ReduxReact/Counter';
import { MyStore } from './components/ReduxReact/Store';

import { Provider } from 'react-redux';



function App() {
  return (
    <>
    {/* <CharacterCount/> */}
    {/* <CharacterCount/> */}
    {/* <HidePara/>
<ToggleText/> */}
{/* <AddOrRemoveItem/> */}
{/* <Timer/> */}
{/* <ReactForms/> */}
{/* <ThemeProvider>
<ThemeToglle/>
</ThemeProvider> */}
{/* <ReactIteamLists/> */}
<Provider store={MyStore}>
<Counter/>
</Provider>
</>
  );
}

export default App;
