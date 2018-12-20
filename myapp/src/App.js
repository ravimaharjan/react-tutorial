import React, { Component } from 'react';
import Ninjas from './Ninjas';
class App extends Component {
  state = {
    ninjas: [
      { name: 'Ravi', age: 30, belt: 'black', id: 1},
      { name: 'Rashna', age: 23, belt: 'black', id: 2},
      { name: 'Kirshna', age: 33, belt: 'black', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome.</p>
      <Ninjas ninjas={ this.state.ninjas }/>
      
      </div>
    );
  }
}

export default App;
