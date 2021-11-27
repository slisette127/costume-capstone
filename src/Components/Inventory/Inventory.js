import React, { useEffect, useState } from 'react'
import classes from './Inventory.module.css'


export default function Inventory() {
    
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch("http://localhost:3330/inventory")
            .then(response => response.json()) 
            .then(data => setInventory(data))
    }, [])

    return (
        <div>
            {inventory.map((i, index)=> {
                return(
                    <div key={index} className={classes.whatever}>
                        {i.Name}
                        <img src={i.ImageURL}/>
                        {console.log(inventory)}
                    </div>
                )
            })}
        </div>
    )
}
