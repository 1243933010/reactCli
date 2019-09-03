
import React from 'react';
import axios from 'axios'
import { Link , Redirect } from 'react-router-dom'

class FoodChildren extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            fuhao:'<',
            api:'http://a.itying.com/',
            login:false
        }
        
    }
    back = ()=>{
        console.log('back')
        this.setState({
            login:true
        })
        
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
    //    console.log(this.state.list)
    if(this.state.login){
        return (
            <Redirect to={{pathname:'/food'}}/>
        )
    }
        return(
            <div className="foodchildren">
                {/* <p>这是food子组件</p> */}
                <p onClick={this.back}className="back">
                    {/* <Link to='/food'> {this.state.fuhao}返回</Link>  */}
                    {this.state.fuhao}返回
                    </p>
                
                {
                    this.state.list.map((value,index)=>{
                        return(
                            <div key={index} className="xiangqing">
                                <img src={`${this.state.api}${value.img_url}`}/>
                                <p>{value.title}</p>
                                <p>{value.price}/份</p>
                                <p>商品详情</p>
                                {/* 解析标签 */}
                                <div dangerouslySetInnerHTML={{__html:value.content}}></div>
                            </div>
                        )
                    })


                    // 把数据先放data，在方法里面let data  = JSON.parse(this.data);this.data = data然后写个标签循环
                }
            </div>
        )
    }
}

// navigator
// switch
// redirect
// navigatorback
export default FoodChildren;