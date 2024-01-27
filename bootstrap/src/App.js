import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Buttons from './components/Buttons';
import Accordions from './components/Accordions';



import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div>
      <NavBar/>
      <Accordions/>
      <Buttons/>
      
    </div>
  );
}

export default App;
