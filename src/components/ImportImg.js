import React from 'react'
import img from '../assets/images/logo.svg'

class ImportImg extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg: '新闻',
            list:[1,2,3,4,5,6,7],
            arr:[
                {name:'张三'},
                {name:'李四'},
                {name:'王五'},
                {name:'李麻子'},

            ]
        }
    }
    setData=(msg)=>{
        this.setState({
            msg:msg
        })
    }
    render(){
        // 在render里面操作循环返回数据
        const list = this.state.list.map((item,index)=>{
            return <li key={index}>{item}</li>
        })

        return(
            <div id="ImportImg">
                <p>{this.state.msg}</p>
                <img src={img} className="img" />
                <ul>{list}</ul>
                <hr />
                {/* 直接在模板里面写操作数据 */}
                
                    <ul>
                        {
                        this.state.arr.map((item,index)=>{
                            return (
                                <li key={index}>{item.name}</li>
                            )
                        })
                    }
                    </ul>
                    <button onClick={this.setData.bind(this,'军事')}>点击改变msg的内容</button>
                
            </div>
        )
    }
}

export default ImportImg;