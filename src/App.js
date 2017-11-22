import React, { Component } from 'react';
import './App.css';

// J'importe mon component Stories
import Users from './components/users/users-component';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Users/>
      </div>
    );
  }
}

export default App;
