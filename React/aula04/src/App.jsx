import './App.css';
import Counter from './components/Counter/Counter.component';
import Mirror from './components/Mirror/Mirror.component';
import Name from './components/Name/Name.component';

import CountProvider from './context/CountContext';
import NameProvider from './context/NameContext';

function App() {
  return (
    <div className="App">
      <NameProvider>
        <CountProvider>
          <Name />
          {/* <Counter />
          <hr />
          <Mirror /> */}
        </CountProvider>
      </NameProvider>
    </div>
  );
}

export default App;
