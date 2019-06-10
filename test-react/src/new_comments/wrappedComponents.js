// 公共部分抽离  localstorage  高阶组件为一个函数，传入组件，返回一个新的组件

import React,{Component} from 'react'

export default(WrappedComponents,name)=>{

    class LocalStorageAction extends Component{
        constructor() {
            super()
            // 定义localstorage数据
            this.state={
                data:[]
            }
            this.saveData=this.saveData.bind(this)
        }
        // 组件加载获取localstorage
        componentWillMount(){
            const data=localStorage.getItem(name)||[]
            try{
                // localstorage需转换为json格式
                this.setState({data:JSON.parse(data)})
            }catch(e){
                this.setState({data})
            }
        }
        // 保存 localstorage
        saveData(data){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            try{
                localStorage.setItem(name,JSON.stringify(data))
            }catch(e){
                localStorage.setItem(name,data)
            }
        }
        render(){
            return(
                // 将参数传给被包装的组件
//**** */ 注意组件开头大写

                <WrappedComponents data={this.state.data} saveData={this.saveData} {...this.props} />
            )
        }
    
    }
    return LocalStorageAction
}
