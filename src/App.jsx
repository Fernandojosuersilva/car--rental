import React from "react"
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import './App.css'
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Models from "./Pages/Models";
import Reviews from "./Pages/Reviews";
import Contact from "./Pages/Contact";


export default function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}
