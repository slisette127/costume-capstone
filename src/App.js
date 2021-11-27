import React from 'react';
import './App.css';
import LogIn from './Components/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import NewUser from './Components/NewUser/NewUser'
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Inventory />
      <NewUser />
    </div>
  );
}

export default App;

