// 统一都是函数，返回一个对象
    // 使用redux-thunk  就可以返回一个函数
// 引入统一定义的所有类型常量
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_TODO_LIST} from './actionTypes'

// import axios from 'axios'

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    // type:'change_input_value',
    value
})
export const getAddItemAction=(value)=>({
    type:ADD_TODO_ITEM,
    value
})
export const getDelItemAction=(value)=>({
    type:DEL_TODO_ITEM,
    value
})
// 获取数据
export const getInitTodoList=(value)=>({
    type:INIT_TODO_LIST,
    value
})

// export const getTodoList=()=>{
//     // 变为函数时，可以接受到dispath方法  之后发送store使用
//     return (dispatch)=>{
//         axios.get('./').then((res)=>{
//             // 获取数据
//             const newData=res.data
//             // 创建action
//             const action=getInitTodoList(newData)
//             // 发送store
//             dispatch(action)
//         })
//     }
// }