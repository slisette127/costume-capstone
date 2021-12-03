import {React, useState } from 'react'
import url from '../../api/api'

export default function AddInventory() {
    const [body, setBody] = useState({
        Name: "",
        Description: "",
        Quantity: "",
        Cost: "",
        Measurement: "Yards",
        ImageURL: ""
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
        fetch(`${url}/addItem`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          })
    }

    return (
        <div>
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
