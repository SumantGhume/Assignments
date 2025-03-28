import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {

  return (
    <>
      <BrowserRouter>
      <div className="d-flex">    
          <div className="customNavbar bg-dark text-white">
      <UserList></UserList>
      </div>
      <div className="customDetail w-50">
        <Routes>
          <Route path='/' element={<p>User details will show here</p>}></Route>
          <Route path='/user/:ID' element={<UserDetails />}></Route>
        </Routes>
        </div>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;