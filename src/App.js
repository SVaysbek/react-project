import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, Link } from 'react-router-dom'
import Pizza from './components/pages/Pizza'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" index element={""} />
          <Route path="/about" element={""} />
          <Route path="/buyitem" element={""} />
          <Route path="/contact" element={""} />
          <Route path="/bonuce" element={""} />
          <Route path="/vakansiya" element={""} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="*" element={""} />
        </Routes>    

        <Footer />        
    </div>
  );
}

export default App;
