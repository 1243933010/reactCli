import React from 'react'

class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arr:['这是第一条数据','这是第二条数据','这是第三条数据','这是第四条数据'],
            name:'张三'
        }
    }

    
 

    

    render(){
    return(
        <div>
            <p>这是News组件</p>
        
        </div>
    )
    }
}

export default News;