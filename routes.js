// routes.js
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import CustomNavbar from '../components/CustomNavbar';
import Movie from '../components/Movie';

export default function Routes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Router>
      <CustomNavbar toggleModal={toggleModal} />
      <Routes>
        <Route path="/" ><Movie/></Route>
        <Route
          path="/login"> <Login /></Route>


      </Routes>
    </Router>
  )
}
