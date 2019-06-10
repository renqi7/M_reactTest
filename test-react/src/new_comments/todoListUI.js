import React from 'react'

import  'antd/dist/antd'

// 此组件为无状态组件，只有render函数  可直接使用函数
const TodoListUI=(props)=>{

// class TodoListUI extends Component{
    // render(){
        return (
            <div>
                {/* <Input style={{width:'300px'}} value={props.inputValue} onChange={props.handleInputChange}></Input>
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                <List
                    dataSouce={props.list}>
                    renderItem={(item,index)=>(<List.Item onClick={()=>{props.handleDelItem(index)}}>{item}</List.Item>)}

                </List> */}
                <input type="text"  style={{width:'300px'}} value={props.inputValue} onChange={props.handleInputChange}/>
                <button onClick={props.handleBtnClick}>提交</button>
                <ul>
                    {
                        props.list.map((item,index)=>
                            <li onClick={()=>{props.handleDelItem(index)}}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    // }
    // }
}
export default TodoListUI