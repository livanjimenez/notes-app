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
            <input placeholder="Note"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <Button type="submit" variant="contained">
              New Idea
            </Button>
          </form>
        </div>
      </div>
    );
  }
}


export default TodoList;