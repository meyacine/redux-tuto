import React, { Component } from 'react';
import './App.css';

// J'importe mon component Stories
import Stories from './components/stories-component';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Stories/>
      </div>
    );
  }
}

export default App;
