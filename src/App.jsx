import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Nav from './components/Nav';
import Kodr from './pages/Kodr';
import Kodex from './pages/Kodex';
import AllCourses from './pages/AllCourses';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/About' element={<About />} />

        <Route path='/Courses' element={<Courses />}>
          <Route path='/Courses' element={<AllCourses />} />
          <Route path='/Courses/Kodr' element={<Kodr />} />
          <Route path='/Courses/Kodex' element={<Kodex />} />
        </Route >
      </Routes>

      <Footer />

    </>
  )
}

export default App
