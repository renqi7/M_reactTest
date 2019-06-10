import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'

import wrappedComponents from './wrappedComponents';

class commentInput extends Component {
    static propTypes={
        data:propTypes.array,
        saveData:propTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            content: ''
        }
  
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleBlurName = this.handleBlurName.bind(this)

    }
    // input 输入改变
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    // input 失去焦点
    handleBlurName(e) {
        // 将用户名存储再localstorage  调用_私有方法
        // this._saveLocalStorage(e.target.value)
        const newValue=e.target.value
        this.props.saveData(newValue)

    }
    // 提交  将数据传入 通过props 获取父组件传递的方法
    handleClick() {
        if (this.props.onSubmit) {
            const { name, content } = this.state
            this.props.onSubmit({ name, content ,createTime:+new Date()})
            // 清空数据
            this.setState({ content: '' })
        }
    }
    componentWillMount() {
        // 加载用户名
        // this._loadLocalStorage()
    }
    // 使用ref 自动聚焦
    componentDidMount() {
        this.textarea.focus()
    }
    // 保存用户名
    // _saveLocalStorage(name) {
    //     localStorage.setItem('userName', name)
    // }
    // 根据localstorage加载用户名
    // _loadLocalStorage(){
    //     const userName=localStorage.getItem('userName')
    //     if(userName){
    //         this.setState({name:userName})
    //     }
    // }
    render() {
        return (
            <Fragment>
                <div>{this.props.children}</div>
                <input type="text" placeholder="用户名"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    onBlur={this.handleBlurName}
                    ref={(input) => this.input = input} />
                <textarea placeholder="内容" value={this.state.content} onChange={this.handleContentChange} ref={(textarea) => this.textarea = textarea}></textarea>
                <button onClick={this.handleClick}>提交</button>
            </Fragment>
        )
    }
}
commentInput=wrappedComponents(commentInput,'userName')
export default commentInput