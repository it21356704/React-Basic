import logo from './logo.svg';
import './App.css';

function buttonClick(){
  console.log("Button is clicked");
  alert("Button is clicked")
}

function App() {
  return (
    <div className="App">
      <h1>React Event Handling</h1>
      <br/><hr/>
      <button onClick={buttonClick}>Click Here</button>
    </div>
  );
}

export default App;
