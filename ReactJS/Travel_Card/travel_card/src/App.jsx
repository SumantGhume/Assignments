
import './App.css';
import data from './data'
import CardList from './components/CardList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CityDetails from './components/CityDetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CardList data={data}/>}></Route>
      <Route path='/city-details/:ID/*' element={<CityDetails />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;