import React from 'react'
import classes from './InventoryCard.module.css'

export default function InventoryCard(props) {
    return (
        <div className={classes.card_container}>
        <div className={classes.container}>
            <div className={classes.img_container}>
                <img src={props.i.ImageURL}/>
            </div>
               <div className={classes.text_container}>
                {console.log("these are your props ", props.i.Name)}
                   <h1>{props.i.Name} </h1>
                   {props.i.Description}
                   <br/>
                   {props.i.Quantity} {props.i.Measurement} 
                   <br/>
                    <p>{`$${props.i.Cost}/${props.i.Measurement}`}</p>
            </div>
        </div>
        </div>
    )
}
