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

    componentDidMount=()=>{
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <p>这是user组件</p>
                <div className="content">
                    <div className="left">
                        <Link to={`${this.props.match.path}/`} className="a">main</Link>  |
                        <Link to={`${this.props.match.path}/info`} className="a">info</Link>

                    </div>
                    <div className="right">
                        {/* <Route exact path={`${this.props.match.path}/`}  component={Main} />
                        <Route  path={`${this.props.match.path}/info`} component={Info} /> */}
                        {
                            this.props.Routes.map((value,key)=>{
                                return(
                                    <Route key={key} exact={value.exact} path={value.path} component={value.component} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default User;