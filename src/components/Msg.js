import React from 'react'
import '../assets/css/index.css'

// class类名要转换成className,for转成htmlFor

class Msg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是msg组件',
            title:'我是一个title',
            color:'red',
            style:{
                color:'yellow',
                fontSize:'14px'
            }
        }
    }
    render(){
        return(
            <div>
                <p>{this.state.msg}</p>
                <p className={this.state.color} title={this.state.title}>xxxxx</p>
                <label htmlFor="or">姓名</label>
                <input type="text" id="or"/>
                <p style={this.state.style}>这是一段黄色字体</p>
            </div>
        )
    }
}


export default Msg;