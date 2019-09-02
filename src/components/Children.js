
import React from 'react';
// props验证(注意大小写)
import PropTypes from 'prop-types'

class Children extends React.Component{
    constructor(props){
        super(props)
    }

    getThis=(val)=>{
        console.log(this.props.btn.state.msg)
    }
    getFn = ()=>{
        this.props.fnc()
    }
    render(){
        return(
            <div className='children'>
                <p>这是Children组件的内容</p> 
                <button onClick={this.getThis}>点击children组件获取父组件的数据</button>
                <button onClick={this.getFn}>点击children组件获取父组件的方法</button>
                <p>{this.props.mag}</p>
            </div>
        )
    }
}

Children.propTypes={
    msg:PropTypes.string
}

export default Children;