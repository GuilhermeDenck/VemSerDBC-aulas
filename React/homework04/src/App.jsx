import './App.css';
import WorkProvider from './context/WorkContext';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <WorkProvider>
        <Home />  
      </WorkProvider>
    </div>
  );
}

export default App;
