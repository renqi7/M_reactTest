import React, {  Fragment, useState, useEffect } from 'react'

// import PropTypes from 'prop-types'

// class commentInput extends Component {
function commentInput(props) {
    // static propTypes = {
    //     name: PropTypes.any,
    //     onNameInputBlur: PropTypes.func,
    //     onSubmit: PropTypes.func
    // }
    // static defaultProps = {
    //     name: ''
    // }
    const [name, setName] = useState(props.name);
    useEffect(() => {

    })
    const [commen, setCommen] = useState('');
    useEffect(()=>{

    })
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         // 接受传入的name
    //         name: props.name,
    //         comment: ''
    //     }
    //     this.handleSubmitClick = this.handleSubmitClick.bind(this)
    //     this.handleNameChange = this.handleNameChange.bind(this)
    //     this.handleContentChange = this.handleContentChange.bind(this)
    //     this.handleBlurName = this.handleBlurName.bind(this)

    // }
    // 使用ref 自动聚焦
    function componentDidMount() {
        this.textarea.focus()
    }
    // input 失去焦点
    function handleBlurName(e) {
        if (props.onNameInputBlur) {
            props.onNameInputBlur(e.target.value)
        }
    }
    // input 输入改变
    // handleNameChange(e) {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // handleContentChange(e) {
    //     this.setState({
    //         comment: e.target.value
    //     })
    // }
    // 提交  将数据传入 通过props 获取父组件传递的方法
    function handleSubmitClick() {
        debugger
        if (props.onSubmit) {
            const { name, comment } = this.state
            props.onSubmit({ name, comment, createTime: +new Date() })
            // 清空数据
            // this.setState({ comment: '' })
            // setComment(comment:'')
        }
    }
    function handlechange(){
        // return setComment(comment)
    }
    // render() {
    return (
        <Fragment>
            {/* <div>{this.props.children}</div> */}
            <input type="text" placeholder="用户名"
                // value={this.state.name}
                value={name}
                // onChange={this.handleNameChange}
                onChange={() => setName(name)}
                onBlur={(e)=>handleBlurName(e)}    
                // ref={(input) => this.input = input}
                 />

            <textarea placeholder="内容" value={commen}
                // onChange={this.handleContentChange} 
                onChange={()=>setCommen(commen)}
                // ref={(textarea) => this.textarea = textarea}
                ></textarea>
            {/* <button onClick={handleSubmitClick()}>提交</button> */}
        </Fragment>
    )
    // }
}
export default commentInput