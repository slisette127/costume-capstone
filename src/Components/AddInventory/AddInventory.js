import {React, useState } from 'react'
import url from '../../api/api'
import classes from './AddInventory.module.css'
import bobbins from '../../bobbins.jpg'
import picture from '../../addItem.jpg'
import NavBar from '../NavBar/NavBar'

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
        fetch(`${url}/addItem`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(body)
          })
    }

    return (
        <div> 
            <NavBar image={picture}/>
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
            <div className={classes.input_container}> 
                <input type="text" name="Name" placeholder="Name of Material" value={body.Name} onChange={handleChange} />

                <textarea type="text" name="Description" placeholder="Description of item: Color, Make, Fabric Content, etc.." onChange={handleChange} />
                <div className={classes.qty_container}>
                <input type="number" name="Quantity" placeholder="Quantity on hand" onChange={handleChange} />
                <select name="Measurement" value={body.Measurement} onChange={handleChange}>
                    <option>Yards</option>
                    <option>Each</option>
                </select>
                </div>
                <div className={classes.qty_container}>
                <input type="number" name="Cost" step="0.01" placeholder="Cost per unit" onChange={handleChange}/>

                <select name="Measurement" value={body.Measurement} onChange={handleChange}>
                    <option>Yard</option>
                    <option>Each</option>
                </select>
                </div>
                <input type="text" name="ImageURL" placeholder="Image"  onChange={handleChange}/>

                <input type="submit" />
                {console.log(body)}
            </div>

                <div className={classes.img_container}>
                    <img src={bobbins} alt="bobbins"/>
                </div>
            


            </form>
        </div>
        </div>
    )
}
