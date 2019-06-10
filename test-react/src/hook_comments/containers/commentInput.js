import React, { useState, Component } from 'react'

import PropTypes from 'prop-types'

// 引入connet  用于和store建立链接
import { connect } from 'react-redux'
import { getAddItemAction } from '../store/actionCreator'
import CommentInput from '../components/commentInput'

class commentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            name: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this._saveUserName = this._saveUserName.bind(this)

    }
    componentWillMount() {
        // 获取userName
        this._loadUserName()
    }
    _loadUserName() {
        const name = localStorage.getItem('userName')
        if (name) {
            this.setState({ name })
        }
    }
    // input 输入改变
    _saveUserName(name) {
        if (name) {
            localStorage.setItem('userName', name)

        }
    }
    // comment为component/commentInput中提交时传入的参数  name,comment,createTime
    handleClick(comment) {

        if (!comment) return
        if (!comment.name) return alert('请输入用户名')
        if (!comment.comment) return alert('请输入评论内容')
        // props为和store连接 接收到的数据 comments  onSubmit
        const { comments } = this.props
        // 合并留言列表
        const newComments = [...comments, comment]
        // 设置local comments
        localStorage.setItem('comments', JSON.stringify(newComments))
        // this.props.onSubmit 是 connect 传进来的
        // 会 dispatch 一个 action 去新增评论
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
        }


    }


    render() {
        return (
            <CommentInput
                onNameInputBlur={this._saveUserName}
                onSubmit={this.handleClick}
            />
        )
    }
}
const mapStateToProps = (state) => {
    // 链接commentlist 用于添加数据，更新数据
    return {
        comments: state.comments
    }

}
const mapDispatchToProps = (dispatch) => {
    // 链接  添加方法  
    return {
        onSubmit: (comment) => {
            dispatch(getAddItemAction(comment))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(commentInputContainer)