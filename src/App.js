// import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Lyons from './components/Class';


function App() {
  return (
    <div className="App">
         <h1>Hi Guys</h1>
         <Message name = "Kevin"></Message>
         <Message name = "Mercy"></Message>
         <Message name = "Lyons"></Message>
        <Lyons name="John" />
        <button>Click here</button>
    </div>
    
  );

  
}

export default App;
