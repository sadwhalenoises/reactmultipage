import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Apple from './apple.js'
import Banana from './banana.js'
import Grape from './grape.js' 
import Orange from './orange.js' 
import Home from './home.js' 

function nav() {
  return (
    <> 
    <Router>
      <Navbar bg="dark" variant="dark">
        
         
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/apple">Apple</Link>
            </p>
            <p>
                <Link to="banana">Banana</Link>
            </p>
            <p>
                <Link to="grape">Grape</Link>
            </p>
            <p>
                <Link to="orange">Orange</Link>
            </p>
        </Navbar>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/apple" element={<Apple />}></Route>
                <Route exact path="banana" element={<Banana />}></Route> 
                <Route exact path="grape" element={<Grape />}></Route>
                <Route exact path="orange" element={<Orange />}></Route>
            </Routes>
          </Router>
        
     
      
    </>
  )
}

export default nav