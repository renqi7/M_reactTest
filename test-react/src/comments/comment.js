import React ,{Component,Fragment} from 'react'

class comment extends Component{
    constructor(props){
        super(props)
        this.state={duration:''}
        this.handleDelComment=this.handleDelComment.bind(this)
    }

   
    componentWillMount(){
        this._updateTimeString()
        // 定时器 自动更新时间
        this._time=setInterval(()=>{
            this._updateTimeString()
        },5000)
    }
    // 清除定时器  组件销毁时调用
    componentWillUnmount(){
        clearInterval(this._time)
    }
     // 转换时间
    _updateTimeString(){
        const duration=(+Date.now()-this.props.comment.createTime)/1000
        // 设置状态
        this.setState({
            duration:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`
        })
    }
    // 删除数据
    handleDelComment(){
        if(this.props.onDelComment){
            this.props.onDelComment(this.props.index)
        }
    }
    render(){
        return(
            <Fragment>
                
                <h4>{this.props.comment.name}</h4>
               <p>{this.props.comment.content}</p>
               {/* <span style={{float:'right'}}>{this.props.comment.createTime}</span> */}
               <span style={{float:'right'}}>{this.state.duration}</span>
               <span onClick={this.handleDelComment}>删除</span>
               <hr/>
            </Fragment>
        )
    }
}
export default comment