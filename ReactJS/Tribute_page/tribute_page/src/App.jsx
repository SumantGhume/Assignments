import React from "react";
import Header from './components/Header'
import HeaderImage from './components/HeaderImage'
import About from './components/Aboutus';
import Career from './components/Career';
import Achievements from './components/Achivements';
import Gallery from './components/Gallary';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      <Header />
      <HeaderImage />
      <About />
      <Career />
      <Achievements />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
