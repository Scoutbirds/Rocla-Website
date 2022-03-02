import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About';
import Procedures from './Components/Procedure Section/Procedures';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProcedurePDO from './Components/Procedure Section/ProcedurePDO';
import Injectibles from './Components/Procedure Section/Injectibles';
import FacialandPeels from './Components/Procedure Section/FacialandPeels';

function App() {

  return (
    <Router>
      <div>
        <Nav/>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/procedures" exact element={<Procedures/>} exact = {true}/>
            <Route path="/procedures/1" exact element={<Injectibles/> } exact = {true}/>
            <Route exact path="/procedures/2" exact element={<ProcedurePDO/>}/>
            <Route path="/procedures/3" exact element={<FacialandPeels/>}/>
            <Route path="/contact" exact element={<Contact/>} exact = {true}/>
          </Routes>
        </ScrollToTop>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
