import React, { useState } from 'react'
import Movie from './components/Movie'
import CustomNavbar from './components/CustomNavbar'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Container, Navbar } from 'reactstrap';

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const toggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
   <div className='container-fluid'>
    <CustomNavbar onSearch={handleSearch} toggle={toggle}/>
    <Movie searchQuery={searchQuery} />
      <Container>
        <Movie />
      </Container>
      <Login isOpen={isLoginOpen} toggle={toggle} />
    </div>
  )
}

export default App
