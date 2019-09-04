import React from 'react';
import {Link,Route} from 'react-router-dom'

// import AddShop from './Shop/AddShop'
// import ShopList from './Shop/ShopList'

import '../assets/css/App.css'

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        // console.log(this.props.match.path)
        // console.log(this.props.Routes)
        return(
            <div>
                <p className="a">这是Shop组件</p>
                <div className="content">
                    <div className="left">
                        <Link to={`${this.props.match.path}/`} className="a">增加商户</Link>
                        <Link to={`${this.props.match.path}/shoplist`} className="a">商户列表</Link>
                    </div>
                    <div className="right">
                        {
                            this.props.Routes.map((value,key)=>{
                                return(
                                    <Route key={key} exact={value.exact} path={`${value.path}`} component={value.component} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;