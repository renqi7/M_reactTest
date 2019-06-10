import React, { Component, Fragment } from 'react'

import PropTypes from 'prop-types'

class commentInput extends Component {
    static propTypes = {
        name: PropTypes.any,
        onNameInputBlur: PropTypes.func,
        onSubmit: PropTypes.func
    }
    static defaultProps = {
        name: ''
    }
    constructor(props) {
        super(props)
        this.state = {
            // 接受传入的name
            name: props.name,
            comment: ''
        }
        this.handleSubmitClick = this.handleSubmitClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleBlurName = this.handleBlurName.bind(this)

    }
    // 使用ref 自动聚焦
    componentDidMount() {
        this.textarea.focus()
    }
    // input 失去焦点
    handleBlurName(e) {
        if (this.props.onNameInputBlur) {
            this.props.onNameInputBlur(e.target.value)
        }
    }
    // input 输入改变
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleContentChange(e) {
        this.setState({
            comment: e.target.value
        })
    }
    // 提交  将数据传入 通过props 获取父组件传递的方法
    handleSubmitClick() {
        if (this.props.onSubmit) {
            const { name, comment } = this.state
            this.props.onSubmit({ name, comment, createTime: +new Date() })
            // 清空数据
            this.setState({ comment: '' })
        }
    }

    render() {
        return (
            <Fragment>
                <div>{this.props.children}</div>
                <input type="text" placeholder="用户名"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    onBlur={this.handleBlurName}
                    ref={(input) => this.input = input} />
                <textarea placeholder="内容" value={this.state.comment} onChange={this.handleContentChange} ref={(textarea) => this.textarea = textarea}></textarea>
                <button onClick={this.handleSubmitClick}>提交</button>
            </Fragment>
        )
    }
}
export default commentInput