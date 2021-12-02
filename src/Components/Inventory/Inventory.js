import React, { useEffect, useState } from 'react'
import url from '../../api/api'
import InventoryCard from '../InventoryCard/InventoryCard'
import classes from './Inventory.module.css'


export default function Inventory() {
    
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        fetch(`${url}/inventory`)
            .then(response => response.json()) 
            .then(data => setInventory(data))
    }, [])

    return (
        <div className={classes.container}>
            {inventory.map((i, index)=> {
                return(
                    <InventoryCard i={i}/>
                )
            })}
        </div>
    )
}
