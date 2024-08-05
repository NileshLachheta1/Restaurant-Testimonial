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
        <Route path='Restaurant-Testimonial/' element={<Homepage />}></Route>
        <Route path='Restaurant-Testimonial/about' element={<Homepage />}></Route>
        <Route path='Restaurant-Testimonial/menu' element={<MenuPage />}></Route>
        <Route path='Restaurant-Testimonial/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
