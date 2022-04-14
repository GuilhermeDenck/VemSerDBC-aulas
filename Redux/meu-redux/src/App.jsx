import './App.css';
import SideBar from './components/SideBar.component';
import Video from './components/Video.component';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  );
}

export default App;