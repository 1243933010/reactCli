import React from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Home from './components/Home'
import News from './components/News'
import Msg from './components/Msg'
import ImportImg from './components/ImportImg'
import TodoList from './components/TodoList'
import Father from './components/Father'
import Axios from './components/Axios'

let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'

function App() {
  return (
    <div className="App">
   
      <Home />
      <News />
      <Msg />
      <ImportImg />
      <TodoList />
      <Father />
      <Axios  api={api}/>
    </div>
  );
}

export default App;
