import React, { Component } from 'react'

import {connect} from 'react-redux'


// 引入store
// import store from '../store/store'

// 引入actionCreator
import {getInputChangeAction ,getAddItemAction, getDelItemAction} from '../store/actionCreator'

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
        // store.subscribe(this.storeChange)


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
       
        // 代替使用actionCreator
        const action=getInputChangeAction(e.target.value)

        store.dispatch(action)
    }
    // 提交添加数据
    handleBtnClick(e){

        const action=getAddItemAction()
        store.dispatch(action)
    }
    // 删除数据
    handleDelItem(index){
        const action=getDelItemAction(index)
        store.dispatch(action)
    }

    componentWillMount(){

    }
}
const mapStateToProps=(state)=>{
    return{

    }
}
const mapDispatchToProps=(dispatch)=>{
    return {

    }
}
const commentList=connect(mapStateToProps,mapDispatchToProps)(commentList)
export default commentList