import React, { Component,Fragment } from 'react'

// 传入列表中当个组件
// import Comment from './comment'

import PropTypes from 'prop-types'
// connect连接
import { connect } from 'react-redux'
// 获取建立连接后的 actionCreator方法
import { getInitTodoList, getDelItemAction } from '../store/actionCreator'

import CommentList from '../components/commentList'



class commentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        onDelComment: PropTypes.func
    }
    // 设置默认值
    static defaultProps={
        comments:[]
    }
    // 验证参数类型
    // static propTypes={commentList:propTypes.array}
    constructor() {
        super()
        this.handleDeleteComment=this.handleDeleteComment.bind(this)
    }

    // 默认初始加载数据
    componentWillMount() {
        this._loadComments()
    }
    // 从localstorage中获取数据
    _loadComments() {
        let comments = localStorage.getItem('comments') 
        comments=comments?JSON.parse(comments):[]
        // 建立连接connect传进来  dispatch getInitTodoList方法  并传入值,用于获取初始化数据到state中
        this.props.InitTodoList(comments)
    }

    // 删除
    handleDeleteComment(index) {
        // ***props不能改变需重新定义一个变量
        const { comments } = this.props

        // 改变localStorage
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1)
        ]
        localStorage.setItem('comments', JSON.stringify(newComments))

        // dispatch一个action 去删除评论
        if (this.props.onDelComment) {
            this.props.onDelComment(index)
        }

    }
    render() {
        return (
            <div>
            <CommentList 
            comments={this.props.comments} 
            onDelComment={this.handleDeleteComment}/>
            </div>
        )
    }
}


// 设置链接规则
const mapStateToProps = (state) => {
    debugger
    return {
        comments: state.comments
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        // 将数据列表初始化到state中
        InitTodoList: (comments) => {
            dispatch(getInitTodoList(comments))
        },
        // 删除方法
        onDelComment: (index) => {
            dispatch(getDelItemAction(index))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(commentListContainer)