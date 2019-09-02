import React from 'react'
class Home extends React.Component {
    constructor() {
        super();
        this.state = {name:'李四'}
    }
     btn = ()=>{
        this.setState({
            name:'张三'
        })
    }
    render() {
        return (
            <div>
                <p>你好，我是Home组件</p>
                <p>{this.state.name}</p>
                <button onClick={this.btn}>点击</button>
            </div>
        )
    }
}

export default Home;
