import React from 'react'
class TodoList extends React.Component{
constructor(props){
    super(props)
    this.state = {
        list:[]
    }
}
addHandle = ()=>{
    const msg  = this.refs.input.value;
    let listArr = this.state.list;
    listArr.push(msg)
    console.log(msg)
    this.setState({
        list:listArr
    })
    this.refs.input.value = ''
    console.log(this.state.list)
}
delHandle=(index)=>{

const arr = this.state.list;
arr.splice(index,1);
this.setState({
    list:arr
})
}
render(){
    return(
        <div>
            <br /><br /><br />
            <p>TodoList</p>
            <input ref="input" type="text"/>
            <button onClick={this.addHandle}>添加到列表</button>
            <br />
            <ul>
                {
                
                    this.state.list.map((value,index)=>{
                        return(
                            <li key={index}>
                            {value}
                            <button onClick={this.delHandle.bind(this,index)}>删除此条信息</button>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    ) 
}
}


export default TodoList;