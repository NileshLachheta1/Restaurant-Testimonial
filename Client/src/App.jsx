import react from 'react';
import Navbar from './Component/Navbar/Navbar.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Homepage from './Component/Homepage/Homepage.jsx';//
import Contact from './Component/ContactUs/ContactUs.jsx';
import MenuPage from "./Component/Menupage/Menupage.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<Homepage />}></Route>
        <Route path='/menu' element={<MenuPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
