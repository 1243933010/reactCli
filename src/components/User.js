import React from 'react';

import '../assets/css/App.css'

import Main from './User/Main'
import Info from './User/Info'
import {Route,Link} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p>这是user组件</p>
                <div className="content">
                    <div className="left">
                        <Link to="/user/" className="a">main</Link>  |
                        <Link to="/user/info" className="a">info</Link>

                    </div>
                    <div className="right">
                        <Route exact path="/user/"  component={Main} />
                        <Route  path="/user/info" component={Info} />

                    </div>
                </div>
            </div>
        )
    }
}

export default User;