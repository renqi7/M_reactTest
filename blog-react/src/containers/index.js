import React , {Component} from 'react'
// import { connect } from 'react-redux'

import style from '../App.css'
// 轮播图组件

import Banner from "../components/common/banner/banner"
import Header from "../components/common/header/header"
class Index extends Component {
    render() {
        return (
            <div className={style.wrap}>
                {/* 轮播图组件 */}
                <Header/>
                <Banner/>
            </div>
        )
    }
}
    
export default Index