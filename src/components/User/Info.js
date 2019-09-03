import React from 'react';

import '../../assets/css/App.css'

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p className="a">这是Info组件</p>
                <div className="content">
                    <div className="left">

                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        )
    }
}

export default Info;