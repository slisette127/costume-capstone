import React, { useEffect, useState } from 'react'


export default function Inventory() {
    
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch("https://costume-api.herokuapp.com/inventory")
            .then(response => response.json()) 
            .then(data => setInventory(data))
    }, [])

    return (
        <div>
            {inventory.map((i, index)=> {
                return(
                    <div>
                        {i.Name}
                        {console.log(inventory)}
                    </div>
                )
            })}
        </div>
    )
}
