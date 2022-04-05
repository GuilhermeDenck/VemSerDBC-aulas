import { useState } from 'react';
import './App.css';
import List from './components/List';
import { PeopleDTO } from './models/peopleDTO';

function App() {
  const [people, setPeople] = useState<PeopleDTO['people']>(
    [{
      name: 'Gabriel',
      age: 12
    }]
  );

  return (
    <div className="App">
      <h1>Melhor Turma</h1>
      <List people={people} />
    </div>
  );
}

export default App;
