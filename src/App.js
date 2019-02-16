import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem : '',
      todoItems:[]
    }
    this.onKeyUp = this.onKeyUp.bind (this);
    this.onItemDelete = this.onItemDelete.bind(this);
    }

    onItemClicked(item) {
      return () => {
      const isDone = item.isDone;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...this.state.todoItems.slice (0, index),
          {
            ...item,
            isDone: !isDone
          },
          ...this.state.todoItems.slice (index + 1 )
        ]
      });
    }
  }
  
    onItemDelete(item) {
      return () => {
        const index = this.state.todoItems.indexOf(item);
        this.setState({
          todoItems: [
            ...this.state.todoItems.slice (0, index),
            ...this.state.todoItems.slice (index + 1 )
          ]
        });
      }
    }

    onKeyUp(event) {
      if (event.keyCode === 13){
      const inputText = event.target.value;
      event.target.value = '';
      if (!inputText || inputText === '')
        return;
      else {
        this.setState({
          todoItems: [
            { 
              title: inputText,
              isDone: false 
            },
            ...this.state.todoItems
          ]
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>TODO LIST APP</h1>
          <input type="text"
          placeholder="Nhập 1 việc cần làm" 
          onKeyUp={this.onKeyUp} ></input>
        </div>
        {
            this.state.todoItems.map ((item,index) =>
           <TodoItems 
           key = {index}
           item= {item} 
           onClickTick = {this.onItemClicked(item)}
           onClickDel = {this.onItemDelete(item)}
           />)
        }
      </div>
    );
  }
}

export default App;
