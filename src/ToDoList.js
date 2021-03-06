import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = e => {
    if (this.inputElement.value !== "") {
      var newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this.inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  render() { 
    return ( 
      <div className="toDoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input 
              ref={(a) => this.inputElement = a} 
              placeholder="Enter Task"></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
     );
  }
}
 
export default ToDoList;

