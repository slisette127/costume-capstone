import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import logo2 from '../../logo2.jpg'


export default function NavBar(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"))
    }, [loggedIn])

    

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={props.image} alt="logo" />
            </div>

            <div className={classes.babyContainer}> 
                <Link to="/inventory"><div>Inventory</div></Link>
                {loggedIn
                    ? <Link exact='true' to="/" onClick={(e)=> setLoggedIn(localStorage.setItem("loggedIn", "false"))}><div>Log Out</div></Link>
                    : <Link exact='true' to="/"><div>Login</div></Link>
               
                }
                
                <Link to="/additem"><div>Add Item</div></Link>
                {console.log(loggedIn)}
            </div>

        </div>
    )
}
