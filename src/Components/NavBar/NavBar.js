import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={classes.container}>
            <h1 className={classes.gridItem}></h1>

            <div className={classes.babyContainer}> 
                <Link to="/dashboard"><div>Dashboard</div></Link>
                <Link exact to="/"><div>Login</div></Link>
                <Link to="/additem"><div>Add Item</div></Link>
            </div>

        </div>
    )
}
