import React from 'react'
import classes from './InventoryCard.module.css'



export default function InventoryCard(props) {

    function getHeaders(){
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        return headers
    }
    


    const handleDelete = (event) => {
        console.log("click", props.i.ItemId)
        fetch(`http://localhost:3330/deleteItem/${props.i.ItemId}`, {
            method: "DELETE",
            headers: getHeaders()
          })
          .then(() => {window.location.reload()})
    }

    return (
        <div className={classes.card_container}>
        <div className={classes.container}>
            <div className={classes.img_container}>
                <img src={props.i.ImageURL}/>
            </div>
               <div className={classes.text_container}>
                {console.log("these are your props ", props.i.ItemId)}
                   <h1>{props.i.Name} </h1>
                   {props.i.Description}
                   <br/>
                   {props.i.Quantity} {props.i.Measurement} 
                   <br/>
                    <p>{`$${props.i.Cost}/${props.i.Measurement}`}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
        </div>
    )
}
