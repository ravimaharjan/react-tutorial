import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ravi', age: 30, belt: 'black', id: 1},
      { name: 'Rashna', age: 23, belt: 'black', id: 2},
      { name: 'Kirshna', age: 33, belt: 'black', id: 3}
    ]
  }
  addNewNinja = (newNinja) => {
    newNinja.id = Math.random();
    let newNinjaList = [... this.state.ninjas, newNinja];
    this.setState({
      ninjas: newNinjaList
    })
  }
  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter((ninja) =>{
      return ninja.id != id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome.</p>
      <Ninjas ninjas={ this.state.ninjas } deleteNinjaFunc= { this.deleteNinja }/>
      <AddNinja addNinjaFunc= { this.addNewNinja }/>
      </div>
    );
  }
}

export default App;
