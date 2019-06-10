import React, { Component } from 'react'



// 引入store
import store from './store/store'

// 引入actionCreator
import {getInputChangeAction ,getAddItemAction, getDelItemAction} from './store/actionCreator'

// 引入UI组件，没有逻辑
import TodoListUI from './todoListUI'

class commentList extends Component {
    // 获取store 的数据

    constructor(props){
        super(props)
        // store.getState()  获取到数据
        // this.state=store.getState()
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.handleDelItem=this.handleDelItem.bind(this)
        // 订阅store   只要数据发生改变 执行store方法获取新的数据
        store.subscribe(this.storeChange)


    }
    
    render() {
        return (
        <TodoListUI 
        inputValue={this.state.inputValue} 
        handleInputChange={this.handleInputChange} 
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleDelItem={this.handleDelItem} 
        ></TodoListUI>
        )
    }
    // 更新数据
    storeChange(){
        this.setState(store.getState())
    }

    // input输入
    handleInputChange(e){
        // 创建actions  告诉操作，并发送actions
        // const action={
        //     type:'change_input_value',
        //     value:e.target.value
        // }
        // 代替使用actionCreator
        const action=getInputChangeAction(e.target.value)

        store.dispatch(action)
    }
    // 提交添加数据
    handleBtnClick(e){
        // const action={
        //     type:'add_todo_item'
        // }
        const action=getAddItemAction()
        store.dispatch(action)
    }
    // 删除数据
    handleDelItem(index){
        // const action={
        //     type:'del_todo_item',
        //     index
        // }
        const action=getDelItemAction(index)
        store.dispatch(action)
    }

    componentWillMount(){
        // 可通过接口调用数据
        // axios.get('../xx').then((res)=>{
            // 获取数据
            // 定义action  并发送给store
        // })

        // 创建一个action 获取函数  
        // const action=getTodoList()
        // store.dispatch(action)

    }
}
export default commentList