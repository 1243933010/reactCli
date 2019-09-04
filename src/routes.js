


import Home from './components/Home'
import News from './components/News'
import Msg from './components/Msg'
import Content from './components/Content'
import Food from './components/Food'
import FoodChildren from './components/FoodChildren'

import User from './components/User'
import Main from './components/User/Main'
import Info from './components/User/Info'

import Shop from './components/Shop'
import AddShop from './components/Shop/AddShop'
import ShopList from './components/Shop/ShopList'



//实现路由的模块化
let routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      exact: true
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/msg',
      name: 'Msg',
      component: Msg
    },
    {
      path: '/content/:aid',
      name: 'Content',
      component: Content
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/foodchildren/:id',
      name: 'FoodChildren',
      component: FoodChildren
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      routes:[
        {
          path: '/user/',
          name: 'main',
          exact:true,
          component: Main
        },
        {
          path: '/user/info',
          name: 'info',
          component: Info
        }
      ]
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      routes:[
        {
          path: '/shop/',
          name: 'addshop',
          exact:true,
          component: AddShop
        },
        {
          path: '/shop/shoplist',
          name: 'shoplist',
          component: ShopList
        },
      ]
    }
  ]


  export default routes;