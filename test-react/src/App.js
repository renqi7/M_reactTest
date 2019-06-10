import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state={status:false,content:'关了'}
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            status:!this.state.status
        })
        if(this.state.content=='关了'){
            this.setState({content:'开了'})
        }else{
            this.setState({content:'关了'})
        }
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>开关</button>
                <Screen showContent={this.state.content}></Screen>
            </div>
        );
    }
}
// 
class Screen extends Component {
    render() {
        return (
            <div className='screen'>{this.props.showContent}</div>
        )
    }
}
export default App;
