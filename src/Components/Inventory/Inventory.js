import React, { useEffect, useState } from 'react'
import url from '../../api/api'
import InventoryCard from '../InventoryCard/InventoryCard'
import classes from './Inventory.module.css'
import picture from '../../inventorylogo.jpg'
import NavBar from '../NavBar/NavBar'



export default function Inventory() {
    
    const [inventory, setInventory] = useState([])
    const [UserName, setUserName] = useState(localStorage.getItem("UserName"))

    function getHeaders(){
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        headers.append("UserName", `${UserName}`)
        return headers
    }

    useEffect(() => {
        fetch(`http://localhost:3330/inventory`,{
            method: "GET", 
            headers: getHeaders()
        }
        
        )
            .then(response => response.json()) 
            .then(data => setInventory(data))
    }, [])

    return (
        <div>
            <NavBar image={picture}/>
        <div className={classes.container}>
            {inventory.map((i, index)=> {
                return(
                    <InventoryCard i={i}/>
                    )
                })}
        </div>
                </div>
    )
}
