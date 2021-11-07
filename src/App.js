import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About';
import Procedures from './Components/Procedures';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/procedures" exact element={<Procedures/>}/>
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
