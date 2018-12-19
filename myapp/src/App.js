import React, { Component } from 'react';
import Ninjas from './Ninjas';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome.</p>
      <Ninjas name="Ravi" age="20" belt="black"/>
      <Ninjas name="Manish" age="40" belt="black"/>
      </div>
    );
  }
}

export default App;
