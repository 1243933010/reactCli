import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './assets/css/App.css';
import Routes from './routes'



function App() {
  return (

    <Router>
      <div className="app">

        <Link to="/" className="a">Home</Link> |
              <Link to="/news" className="a">news</Link> |
              <Link to="/msg" className="a">msg</Link> |
              <Link to="/user" className="a">用户组件</Link> |
              <Link to="/shop" className="a">商户组件</Link> |

        {
          Routes.map((route, key) => {
            return (
              <Route 
              key={key}
               path={route.path} 
               exact={route.exact} 
               render={props=>(<route.component {...props} Routes={route.routes} />)} />
            )
          })
        }


      </div>
    </Router>
  );
}

export default App;
