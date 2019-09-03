import React from 'react';


class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <p>这是Main组件</p>
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

export default Main;