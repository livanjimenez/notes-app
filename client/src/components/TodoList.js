import React, { Component } from 'react';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="todoHeader">
          <form onSubmit={this.props.addItem}>
            <input placeholder="Note"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit">New Idea</button>
          </form>
        </div>
      </div>
    );
  }
}


export default TodoList;