import Tasks from './tasks';
import './App.css';

const list = ['Praias', 'Montanhas', 'Neve'];


function App() {
  return (    
    list.map((place) => <Tasks value={place} />)
  )
}

export default App;
