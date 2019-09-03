
import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class FoodChildren extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            fuhao:'<',
            api:'http://a.itying.com/'
        }
    }
    back = ()=>{
        console.log('back')
    }
componentWillMount=()=>{

    let url = 'http://a.itying.com/api/productcontent/'
    let api = `${url}?id=${this.props.match.params.id}`
    axios.get(api).then((data)=>{
        console.log(data)
        this.setState({
            list:data.data.result
        })
    })
}
componentDidMount=()=>{
   

}
    render(){
       console.log(this.state.list)
        return(
            <div className="foodchildren">
                {/* <p>这是food子组件</p> */}
                <p onClick={this.back}className="back"><Link to='/food'> {this.state.fuhao}返回</Link> </p>
                
                {
                    this.state.list.map((value,index)=>{
                        return(
                            <div key={index} className="xiangqing">
                                <img src={`${this.state.api}${value.img_url}`}/>
                                <p>{value.title}</p>
                                <p>{value.price}/份</p>
                                <p>商品详情</p>
                                <div>{value.content}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default FoodChildren;