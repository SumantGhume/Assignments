import React from 'react'
import Navbar from '../components/Navbar'
import Card_List from '../components/CardList'
// import data from '../data'
import Footer from '../components/Footer'
import Register from './Register'
import Login from './Login'

const HomePage = ({data}) => {
  console.log(data)
  return (
    <>
      
      
      <Card_List data={data}/>
      {/* <Footer/> */}
    
    </>
  )
}

export default HomePage