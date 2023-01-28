import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RoutesAll from './components/RoutesAll';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <RoutesAll/>
    </BrowserRouter>
  );
}

export default App;
