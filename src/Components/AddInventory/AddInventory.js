import {React, useState } from 'react'

export default function AddInventory() {
    const [body, setBody] = useState({
        Name: "",
        Description: "",
        Quantity: "",
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
        fetch("http://localhost:3330/addItem", {
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
