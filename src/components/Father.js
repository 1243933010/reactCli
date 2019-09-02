
import React from 'react';

import Children from './Children'
class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'father组件内的state数据'
        }
    }

    fatherHandle=()=>{
        console.log(this.refs.children)
    }
    fn = ()=>{
        console.log('父组件的方法成功传递给子组件')
    }
    render(){
        return(
            <div className='father'>
                <p>这是father组件的内容</p> 
                <Children btn={this} ref="children" fnc={this.fn} msg=""/>
                <button onClick={this.fatherHandle}>点击获取children子组件的数据和方法</button>

            </div>
        )
    }
}
export default Father;