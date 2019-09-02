import React from 'react'
import axios from 'axios'
// import request from 'request'

class Axios extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
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
    render(){
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
            </div>
        )
    }
}

export default Axios;
