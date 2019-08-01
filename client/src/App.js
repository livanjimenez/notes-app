import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {

  state = {
    data: null
  };

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
      <div>
        <Header />
        <div>
          <TodoList />
        </div>
      </div>
    );

  }
}

export default App;
