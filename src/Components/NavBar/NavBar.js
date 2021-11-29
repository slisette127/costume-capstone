import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={classes.container}>
            <Link to="/dashboard">Dashboard</Link>
            <Link exact to="/">Login</Link>
            <Link to="/additem">Add Item</Link>

        </div>
    )
}
