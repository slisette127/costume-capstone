import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import './App.css';


import NavBar from './Components/NavBar/NavBar';
// import LogIn from './Components/LogIn/LogIn';
// import NewUser from './Components/NewUser/NewUser'
// import Inventory from './Components/Inventory/Inventory';
// import AddInventory from './Components/AddInventory/AddInventory';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Router />
    </BrowserRouter>
  );
}

export default App;

