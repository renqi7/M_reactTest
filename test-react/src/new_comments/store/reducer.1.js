// 返回一个函数
// state对应存储的数据
const defaultStore={
    inputValue:'',
    list:[]
}

export default(state=defaultStore,action)=>{
    // 判断操作类型,进行改变数据
    if(action.type==='change_input_value'){
        // 深拷贝
        const newState=JSON.parse(JSON.stringify(state))
        // 重新赋值
        newState.inputValue=action.value 
        // 返回新的数据
        return newState
    }

    // 提交添加数据
    if(action.type==="add_todo_item"){
        const newState=JSON.parse(JSON.stringify(state))
        // newState.list.push(newState.inputValue)
        newState.list=[...newState.list,newState.inputValue]
        newState.inputValue=''
        console.log(newState)
        return newState
    }
    // 删除数据
    if(action.type==="del_todo_item"){
        const newState=JSON.parse(JSON.stringify(state))

        newState.list=[...newState.list.slice(0,action.value),...newState.list.slice(action.value+1)]
        return newState

    }

    // 获取数据
    if(action.type==="init_todo_list"){
        debugger
        const newState=JSON.parse(JSON.stringify(state))
        newState.list=action.list
        return newState

    }


    return state

}