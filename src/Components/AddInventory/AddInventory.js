import {React, useState } from 'react'
import url from '../../api/api'
import classes from './AddInventory.module.css'

export default function AddInventory() {
    const [body, setBody] = useState({
        Name: "",
        Description: "",
        Quantity: "",
        Cost: "",
        Measurement: "Yards",
        ImageURL: ""
    })

    const [UserName, setUserName] = useState(localStorage.getItem("UserName"))

    function getHeaders(){
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        headers.append("UserName", `${UserName}`)
        return headers
    }

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
        fetch(`http://localhost:3330/addItem`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(body)
          })
    }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="name" value={body.Name} onChange={handleChange} />
                <textarea type="text" name="Description" placeholder="description" onChange={handleChange} />
                <input type="number" name="Quantity" placeholder="quantity" onChange={handleChange} />
                <input type="number" name="Cost" step="0.01" placeholder="cost" onChange={handleChange}/>
                <select name="Measurement" value={body.Measurement} onChange={handleChange}>
                    <option>Yards</option>
                    <option>Each</option>
                </select>
                <input type="text" name="ImageURL" onChange={handleChange}/>
                <input type="submit" />
                {console.log(body)}
            </form>
        </div>
    )
}
