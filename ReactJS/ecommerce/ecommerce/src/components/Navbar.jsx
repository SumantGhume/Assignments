import React, { useContext } from 'react'
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";
import {ThemeContext} from '../hooks/ThemeContext'

const Navbar = () => {

  const {theme,toggleTheme} = useContext(ThemeContext)

  function handleClick (){
    console.log(theme,"theme value: ")
    
  }

  return (
    <div >
      <nav className={`navbar navbar-expand-lg ${theme !== 'light' ? 'navbar-light bg-light':'navbar-dark bg-dark'}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> 
        <li className="nav-item">
          <a className="nav-link disabled" href="#" >Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <button className="nav-item" style={{fontSize:"30px", border:"none", background:"none"}}   onClick={toggleTheme}>
      
      {theme == "light" ? <MdOutlineToggleOff style={{width:"40px", height:"40px"}}/>:<MdOutlineToggleOn style={{width:"40px", height:"40px"}}/>}
      

      </button>
      
      
      
      {/* <button style={{backgroundColor:theme == 'white'? 'black':'white'}} onClick={() => setTheme(theme == 'white'? 'black':'white')}>Change Theme</button> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar