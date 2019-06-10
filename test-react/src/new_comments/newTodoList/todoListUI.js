import React from 'react'

import  'antd/dist/antd'

// 此组件为无状态组件，只有render函数  可直接使用函数
const TodoListUI=(props)=>{

        return (
            <div>
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
}
export default TodoListUI