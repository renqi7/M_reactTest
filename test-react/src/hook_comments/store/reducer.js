// 返回一个函数
// state对应存储的数据
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'

export default (state, action) => {
    if (!state) {
        state = {
            name: '',
            comments: [
            ]
        }
    }
    switch (action.type) {
        // case CHANGE_INPUT_VALUE:
        //     // 深拷贝
        //     const newState = JSON.parse(JSON.stringify(state))
        //     // 重新赋值
        //     newState.inputValue = action.value
        //     // 返回新的数据
        //     return {newState}
        case ADD_TODO_ITEM:
            // 合并comments并返回
            return { comments: [...state.comments, action.value] }
        case DEL_TODO_ITEM:
            return {
                comments: [...state.comments.slice(0, action.value), ...state.comments.slice(action.value + 1)]
            }
        case INIT_TODO_LIST:
            const newState = action.value
            // newState=action.value
            return { comments: newState }
        default:
            return state

    }



}