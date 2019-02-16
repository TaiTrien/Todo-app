import React, { Component } from 'react';
import './TodoItems.css';
import xbutton from '../images/x-button.svg';
class TodoItems extends Component {

    render() {
        let className = 'TodoItems';
        const btn = xbutton;
        const {item, onClickTick, onClickDel} = this.props; 
        if (item.isDone){
            className += ' TodoItems-Done';
        }
        return(
            <div  className = {className}>
                <p onClick = {onClickTick}>{item.title}</p>
                <img alt="button X" onClick = {onClickDel} src = {btn} width={20} height={20} />
            </div>   
        );
    }
}

export default TodoItems;