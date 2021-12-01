import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import classes from './LogIn.module.css'
import scissors from '../../scissors.jpg'


export default function LogIn() {

    let history = useHistory();

    const [body, setBody] = useState({
        Username: "",
        Password: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setBody((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(body)
        history.push("/inventory")
    }


    return (
        <div className={classes.container}>

            <div className={classes.leftSide}>
                <img src={scissors} alt="scissors"/>
            </div>

            <div className={classes.rightSide}>
               <h1 className={classes.header}>Welcome to Costume</h1>
                <p>Log in to access your personal inventory catalog</p>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input required type="text" name="Username" placeholder="Username" onChange={handleChange} />   
                <br/>
                    <input required type="password" name="Password" placeholder="Password" onChange={handleChange} />   
                <br/>
                     <button type="submit">Log In</button>
                </form>
                </div>
        </div>
    )
}
