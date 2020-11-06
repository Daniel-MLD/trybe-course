import React from 'react';
import Tasks from './Tasks';
import './App.css';

const list = ['Praias', 'Montanhas', 'Neve'];


class App extends React.Component {
  render() {
    return (    
      list.map((place) => <Tasks value={place} />)
    );
  }
}

export default App;
