import React from 'react'
import {Redirect} from 'react-router-dom';
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'李四',
            login:false
        }
    }
     btn = ()=>{
        this.setState({
            name:'张三'
        })
    }
    login = ()=>{
        this.setState({
            login:true
        })
    }
    render() {
        if(this.state.login){
            return(
                <Redirect to={{pathname:'/food'}} />
            )
        }
        return (
            <div>
                <p>你好，我是Home组件</p>
                <p>{this.state.name}</p>
                <button onClick={this.btn}>点击</button>
                <button onClick={this.login}>点击跳转到菜品页面</button>
            </div>
        )
    }
}

export default Home;
