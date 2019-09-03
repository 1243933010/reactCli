import React from 'react'
import url from 'url'

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {
                    id:1,
                    text:'这是第一条详情'
                },
                {
                    id:2,
                    text:'这是第二条详情'
                },
                {
                    id:3,
                    text:'这是第三条详情'
                },
                {
                    id:4,
                    text:'这是第四条详情'
                },
            ]
        }
    }
   
    componentDidMount=()=>{
        //获取动态路由传递来的数据
        console.log(this.props.match.params.aid)
        // 可以获取到路由的get传值，通过url模块对获取的值进行处理 cnpm i url --save

        console.log(this.props.location.search)

        console.log(url.parse(this.props.location.search).query)
    }
    render(){
    return(
        <div>
            <p>这是新闻详情组件</p>
           
        
        </div>
    )
    }
}

export default Content;