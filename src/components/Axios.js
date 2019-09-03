import React from 'react'
import axios from 'axios'
// import request from 'request'

class Axios extends React.Component{
    constructor(props){
        console.log('1.构造函数打印完成')
        super(props);
        this.state = {
            list:[],
            msg:'这是msg更新前的数据'
        }
    }
    request = ()=>{
        let api = this.props.api;
        axios.get(api).then((response)=>{
            console.log(response)
            this.setState({
                list:response.data.result
            })
        })
    }
    setMsg = ()=>{
        this.setState({
            msg:'这是更新后的msg信息'
        })
    }
    // 组件将要挂载执行的周期函数
    componentWillMount=()=>{
        console.log('2.组件将要挂载')
    }
//组件挂载完成执行的周期函数，dom操作和请求数据放在这个周期函数里面
    componentDidMount=()=>{
        this.request()
        console.log('4.组件挂载完成')
    }

    shouldComponentUpdate=()=>{
        console.log('触发更新数据函数')
        return true;
    }
    componentWillUpdate=()=>{
        console.log('组件将要更新数据')
    }
    componentDidUpdate=()=>{
        console.log('组件更新数据完成')
    }
    componentWillUnmount=()=>{
        console.log('组件将要销毁触发的周期函数')
    }
    // 数据更新重新触发render函数
    render(){
        console.log('3.数据渲染render')
        return(
            <div className="axios">
                <p>axios</p>
                <button onClick={this.request}>获取接口数据</button>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            return(
                                <li key={index}>
                                    {value.title}
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.setMsg}>点击改变msg的数据</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}

export default Axios;
