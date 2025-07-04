import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './components/AdminLogin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Employee from './components/Employee'
import Profile from './components/Profile'
import Category from './components/Category'
import AddCategory from './components/AddCategory'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import Start from './components/Start'
import EmployeeLogin from './components/EmployeeLogin'
import EmployeeDetails from './components/EmployeeDetails'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/admin_login' element={<AdminLogin />}></Route>
        <Route path='/employee_login' element={<EmployeeLogin/>}>   </Route>
         <Route path='/employee_detail/:id' element={ <PrivateRoute ><EmployeeDetails /></PrivateRoute>}></Route>
        
     
        
        <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
          
          <Route path='' element={<Home/>}></Route>
          <Route path='/dashboard/employee' element={<Employee/>}></Route>
          <Route path='/dashboard/profile' element={<Profile/>}></Route>
          <Route path='/dashboard/category' element={<Category/>}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
          <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
          
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
