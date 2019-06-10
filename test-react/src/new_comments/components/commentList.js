import React, { Component, Fragment } from 'react'

// 组件参数验证
import PropTypes from 'prop-types'

// 传入列表中当个组件
import Comment from './comment'

// 引入store
// import store from './store'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDelComment: PropTypes.func
      }
    // // 获取store 的数据
    // constructor(props){
    //     super(props)
    //     // store.getState()  获取到数据
    //     this.state=store.getState()
    // }
    
    // 设置默认值
    static defaultProps={
        comments:[]
    }


    constructor(props) {
        super(props)
        this.handleDeleteComment=this.handleDeleteComment.bind(this)
    }

    componentWillMount(){
        console.log(this.props.comments)
    }

    // 删除
    handleDeleteComment(index){
        if(this.props.onDelComment){
            this.props.onDelComment(index)
        }
    }
    render() {
        return (
            <Fragment>
                {this.props.comments.map((value,index) =>
                    <Comment comment={value} 
                    key={index} 
                    index={index} 
                    onDelComment={this.handleDeleteComment}/>
                )}
            </Fragment>
        )
    }
}
export default CommentList