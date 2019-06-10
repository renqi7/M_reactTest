import React, { Component, Fragment } from 'react'

import propTypes from 'prop-types'

// 主页面  引入input list
import ComponentInput from './containers/commentInput'
import ComponentList from './containers/commentList'

// 引入高阶组件
import wrappedComponents from './wrappedComponents'

class commentApp extends Component {
    render() {
        return (
            <Fragment>
                {/* input 表单 */}
                <ComponentInput/>
                    <h1>添加内容</h1>
                {/* list 列表 */}
                <ComponentList/>
            </Fragment>
        )
    }
}
commentApp = wrappedComponents(commentApp, 'contents')
export default commentApp