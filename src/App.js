import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Hero from './Components/Hero-section/Hero';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contacts from './Components/Contacts/Contacts';
function App() {
  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <About/>
     <Portfolio/>
     <Contacts/>

      {/* <Router>

      <Nav/>
    

      <Routes>
    
        <Route path='/' exact element={<Hero/>}></Route>
        <Route path='/Home' exact element={<Hero/>}></Route>
        <Route path='/About' exact element={<About/>}></Route>
        <Route path='/Portfolio' exact element={<Portfolio/>}></Route>
        <Route path='/Contacts' exact element={<Contacts/>}></Route>
      </Routes> 
      <div className='text-center h-10 w-full bg-gray-700 fixed bottom-0'>
      <p className='py-2'> Made by Akinola Emmanuel.</p>
      </div>  
      </Router> */}
      
    </div>
  );
}

export default App;


