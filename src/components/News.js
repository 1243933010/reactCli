import React from 'react'
import { Link } from 'react-router-dom'

class News extends React.Component{
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
    render(){
    return(
        <div>
            <p>这是News组件</p>
            <ul>
                {
                    this.state.list.map((value,index)=>{
                        return(
                            <li key={index}>
                                <Link to={`/content/${value.id}?id=${value.id}`}>{value.text}</Link>                          
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
    }
}

export default News;