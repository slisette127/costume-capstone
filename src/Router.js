import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddInventory from './Components/AddInventory/AddInventory'
import Inventory from './Components/Inventory/Inventory'
import LogIn from './Components/LogIn/LogIn'


export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/additem" component={AddInventory} />
        </Switch>
    )
}

