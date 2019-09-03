
import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../assets/css/index.css'


let allApi = 'http://a.itying.com/'
let api = `${allApi}api/productlist`

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            allApi: 'http://a.itying.com/'
        }
    }
    getData = () => {
        axios.get(api).then((data) => {
            console.log(data)
            this.setState({
                list: data.data.result
            })
        })
    }

    // 周期函数
    componentDidMount = () => {
        this.getData();
    }


    render() {
        return (
            <div>
                <p>这是food父组件</p>
                <div>
                    {
                        this.state.list.map((value, index) => {
                            return (
                                <div key={index}>
                                    <p className="p">{value.title}</p>


                                    <ul>
                                        {
                                            value.list.map((v, i) => {

                                                return (
                                                    <Link key={i} to={`/foodchildren/${v._id}`}>
                                                        <li className="li">
                                                            <img src={`${this.state.allApi}${v.img_url}`} />
                                                            <p>{v.title}</p>
                                                        </li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Food;