import React, { Component, Fragment} from 'react'

// 主页面  引入input list
import ComponentInput from './containers/commentInput'
import ComponentList from './containers/commentList'

// 引入高阶组件
// import wrappedComponents from './wrappedComponents'

class commentApp extends Component {
    // constructor(props) {
    //     super(props)
    //     // 定义一个列表数据
    //     this.state={
    //         // commentList:[]
    //         commentList:props.data
    //     }

    //     this.handleSubmitComment = this.handleSubmitComment.bind(this)
    //     this.handleDelComment=this.handleDelComment.bind(this)

    // }

    // handleSubmitComment(e){
    //     // 提交数据
    //     const newComment=this.state.commentList
    //     newComment.push(e)
    //     this.setState({
    //         commentList:newComment
    //     })
        
    //     // 保存到localstorage
    //     // this._saveLocalStorage(this.state.commentList)
    //     this.props.saveData(newComment)
    // }
    // 获取localstorage
    // componentWillMount(){
    //     // this._getLocalStorage()
        
    // }
    // _saveLocalStorage(val){
    //     localStorage.setItem('comments',JSON.stringify(val))
    // }
    // _getLocalStorage(){
    //     const comments=JSON.parse(localStorage.getItem('comments'))
    //     if(comments){
    //         this.setState({commentList:comments})
    //     }
    // }
    // 删除
    // handleDelComment(index){
    //     // ******需要定义新的变量进行赋值
    //     const comments=this.state.commentList
    //     // const comments=[...this.state.commentList]
    //     comments.splice(index,1)
    //     this.setState({commentList:comments})
    //     // 存储到localstorage
    //     // this._saveLocalStorage(comments)
    //     this.props.saveData(comments)

    // }
    

    render() {
        return (
            <Fragment>
                {/* input 表单 */}
                <ComponentInput/>
                
                {/* list 列表 */}
                <ComponentList/>
            </Fragment>
        )
    }
}
export default commentApp