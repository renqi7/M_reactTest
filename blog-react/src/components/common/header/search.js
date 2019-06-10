import React, { Component } from 'react'
import { connect } from "react-redux";
// import moduleCss from './style.css';
import { Input } from 'antd';
class search extends Component {
    render() {
        var moduleCss = require('./style.css')   
        return (
            <div className={moduleCss.searchContainer}>
                <Input placeholder="" />
            </div>
        )
    }
}
const mapToState = (state) => {
    return {
        searchListShow:state.searchListShow
    }
}
const mapToDispatch = (dispatch) => {
    return {
        // const action=''
        // dispatch(action)
    }
}
export default connect(mapToState, null)(search)