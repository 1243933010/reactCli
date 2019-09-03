import React from 'react';
import {Link,Route} from 'react-router-dom'

import AddShop from './Shop/AddShop'
import ShopList from './Shop/ShopList'

import '../assets/css/App.css'

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p className="a">这是Shop组件</p>
                <div className="content">
                    <div className="left">
                        <Link to="/shop/addshop" className="a">增加商户</Link>
                        <Link to="/shop/shoplist" className="a">商户列表</Link>
                    </div>
                    <div className="right">
                        <Route path='/shop/addshop' component={AddShop} />
                        <Route path='/shop/shoplist' component={ShopList} />

                    </div>
                </div>
            </div>
        )
    }
}

export default Shop;