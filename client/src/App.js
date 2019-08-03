import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';
import { Container } from '@material-ui/core';
import './App.css';
import './todoStyles.css'

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();

    this.state = {
      data: null,
      items: [],
      currentItem: { text: '', key: '' },
    };
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    });
    this.setState({
      items: filteredItems,
    });
  }

  handleInput = e => {
    console.log('input recorded');

    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() }

    this.setState({ currentItem });
  }

  addItem = (el) => {
    console.log('item added');

    el.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      });
    }
  }

  componentDidMount() {
    this.callBackend()
      .then(res => this.setState({ data: res.myBackend }))
      .catch(err => console.log(err));
  }

  callBackend = async () => {
    const response = await fetch('/backend');
    const body = await response.json();

    if (response.status !== 200)
      throw Error(body.message);

    return body;
  };


  render() {
    return (
      <body>
        <Header />
        <Container maxWidth="xs">
          <TodoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
          <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
        </Container>
      </body>
    );
  }
}

export default App;
