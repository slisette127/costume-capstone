import React from 'react';
import './App.css';
import LogIn from './Components/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import NewUser from './Components/NewUser/NewUser'
import Inventory from './Components/Inventory/Inventory';
import AddInventory from './Components/AddInventory/AddInventory';

function App() {
  return (
    <div className="App">
      <Inventory />
      <NewUser />
      <AddInventory/>
    </div>
  );
}

export default App;

