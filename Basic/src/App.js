import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useState } from 'react';

function App() {
  

/*    <Router>
    <div>
      <Switch>
  
        <Route exact path="/">
          <HomePage/>
        </Route>
  
        <Route path="/About">
          <About/>
        </Route>
  
        <Route path="/Contact">
          <Contact/>
        </Route>
  
      </Switch>
    </div>
  </Router>
*/  
const[count, setCount] = useState(0);

//let count = 0;

const increment = () => {
  //count +=1;
setCount(count+1);
}

const decrement = () => {
  //count -=1;
  setCount(count-1);

}

return(
  <>
  <span className='title'> My Counter</span>
  <p className='subTitle'>The count is {count}</p>
  <button onClick={decrement} className='button'>-</button>
  <button onClick={increment} className='button'>+</button>

</>

);

}

export default App;
