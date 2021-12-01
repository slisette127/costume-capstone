import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import logo2 from '../../logo2.jpg'

export default function NavBar() {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={logo2} alt="logo" />
            </div>

            <div className={classes.babyContainer}> 
                <Link to="/inventory"><div>Inventory</div></Link>
                <Link exact='true' to="/"><div>Login</div></Link>
                <Link to="/additem"><div>Add Item</div></Link>
            </div>

        </div>
    )
}
