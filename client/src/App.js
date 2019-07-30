import React, { Component } from 'react';
import './App.css';

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


  return() {
    return (
      <div>
        <p>{this.state.data}</p>
      </div>
    );

  }
}

const backendStyle = {
  fontSize: '24px',
  textAlign: 'center'
};

export default App;
