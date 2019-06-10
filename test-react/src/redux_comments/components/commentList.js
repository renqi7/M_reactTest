import React, { Component, Fragment } from 'react'

// 组件参数验证
import propTypes from 'prop-types'

// 传入列表中当个组件
import Comment from '../comment'

class commentList extends Component {
    // 设置默认值
    static defaultProps={
        commentList:[]
    }
    // 验证参数类型
    static propTypes={commentList:propTypes.array}

    constructor(props) {
        super(props)
        this.handleDeleteComment=this.handleDeleteComment.bind(this)
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
                {this.props.commentList.map((value,index) =>
                    <Comment comment={value} key={index} index={index} onDelComment={this.handleDeleteComment}></Comment>
                )}
            </Fragment>
        )
    }
}
export default commentList