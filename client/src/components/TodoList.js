import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="todoHeader">
          <form onSubmit={this.props.addItem}>
            <input style={inputStyle} placeholder="Note"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <Button type="submit">
              New Idea
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const inputStyle = {
  backgroundColor: '#ede7f6',
};

export default TodoList;