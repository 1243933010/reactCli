import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// import Home from './components/Home'
// import News from './components/News'
// import Msg from './components/Msg'
// import Content from './components/Content'
import Food from './components/Food'
import FoodChildren from './components/FoodChildren'



// import ImportImg from './components/ImportImg'
// import TodoList from './components/TodoList'
// import Father from './components/Father'
// import Axios from './components/Axios'

// let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
// let api = 'http://a.itying.com/api/productlist'

function App() {
  return (
 
    <Router>
      <div className="app">
        
              {/* <Link to="/">Home</Link> |
              <Link to="/news">news</Link> |
              <Link to="/msg">msg</Link> | */}

       

        {/* <Route path="/" exact component={Home} />
        <Route path="/news"  component={News} />
        <Route path="/msg"  component={Msg} /> */}
        {/* aid可以换成其他变量 */}
        {/* <Route path="/content/:aid"  component={Content} /> */}
        <Route path="/food" exact  component={Food} />
        <Route path="/foodchildren/:id"   component={FoodChildren} />






        {/* <br /><br /><br /> */}
        {/* <hr /> */}
        {/* <Home />
        <News />
        <Msg />
        <ImportImg />
        <TodoList />
        <Father />
        <Axios api={api} /> */}
        {/* <Food /> */}
      </div>
    </Router>
  );
}

export default App;
