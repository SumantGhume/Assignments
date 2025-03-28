import React from 'react'
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from './pages/Register';
import AuthProvider from "./hooks/AuthContext";
import ThemeProvider from './hooks/ThemeContext';
import Card_List from './components/CardList';
import data from "./data";

const App = () => {
  return (
    <>
    <ThemeProvider>
      <Navbar/>
      <Login/>
      <Card_List data={data}/>

    </ThemeProvider>
    {/* <AuthProvider> */}
      {/* <Navbar/>
      <Register/> */}
      

    {/* </AuthProvider> */}
    
    
      



    {/* </AuthProvider> */}
    
    
    
    
    </>
  )
}

export default App












// import { useState } from "react";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import data from "./data";
// import Navbar from "./components/Navbar";
// import ThemeProvider from "./hooks/ThemeContext";
// import AuthProvider from "./hooks/AuthContext";
// import Register from "./pages/Register";
// import Login from './pages/Login';

// function App() {
//   // const { theme } = useState("light");

//   return (
//     <>
//       <ThemeProvider>
//         <AuthProvider>
//           <Navbar />
//           {/* <Register/> */}
//           {/* <Login/> */}

//           {/* <HomePage
//             data={data}
//             // style={{ backgroundColor: theme == "light" ? "#fff" : "#000" }}
//           /> */}
//         </AuthProvider>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;
