// 引入redux 创建store
import {createStore} from 'redux'
// 引入reducer    获取到inputvalue,list
import reducer from './reducer'

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
