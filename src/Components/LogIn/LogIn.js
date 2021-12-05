import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import classes from './LogIn.module.css'
import scissors from '../../scissors.jpg'


export default function LogIn() {

    let history = useHistory();

    const [body, setBody] = useState({
        UserName: "",
        UserPassword: ""
    })

    const [error, setError] = useState("")

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
        fetch(`http://localhost:3330/login`, {
            method: "POST", 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(body)
        })
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error('Usernamer/Password incorrect')
            }
            else return response.json()
        })
        .then(localStorage.setItem("loggedIn", "true"))
        .then(localStorage.setItem("UserName", body.UserName))
        .then( ()=>  history.push("./inventory") )
        .catch((error) => setError(error.message))
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
                    <input required type="text" name="UserName" placeholder="Username" onChange={handleChange} />   
                <br/>
                    <input required type="password" name="UserPassword" placeholder="Password" onChange={handleChange} />   
                <br/>
                {error}
                <br/>
                     <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}
