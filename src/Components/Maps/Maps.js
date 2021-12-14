import React from 'react'
import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api'
import picture from '../../fablocator.jpg'
import NavBar from '../NavBar/NavBar'
import classes from './Maps.module.css' 

const containerStyle = {
    width: "400px",
    height: "400px"
}

const markers = [
    {
        id:'jo1',
        lat: 31.4994,
        lng: -97.1504
    },{
        id:'jo2',
        lat: 30.5569,
        lng: -97.678894
    },
    {   
        id: 'jo3',
        lat: 30.266666,
        lng: -97.733330
    }

]

export default function Maps(m) {
    return (
        <div>
        <NavBar image={picture}/>
         <div className={classes.big_container}> 
             <div className={classes.map_container}> 
            <LoadScript googleMapsApiKey="AIzaSyAVA4rcMV0PwCwvOOGJz6MjjZYFePJdv-E">
                <GoogleMap 
                    mapContainerStyle={containerStyle}
                    center={{lat:31.1344, lng:-97.5247}}
                    zoom={8}
                >
                    {markers.map((m) => ( 
                    <Marker 
                    position={{lat: m.lat, lng: m.lng}}
                    /> 
                    ))}
                </GoogleMap>
            </LoadScript>
                </div> 
                    <div className={classes.text_container}>
                        <div className={classes.jo_stores}> 
                        <h2>JOANN Waco, TX</h2>
                        <p>4633 S. Jack Kultgen Expy Unit 104</p>
                        <p>Waco, TX 76706</p>
                                <p>254-662-9689</p>      
                    </div>
                    
                        <div className={classes.jo_stores}> 
                        <h2>JOANN Round Rock, TX</h2>
                        <p>201 University Oaks Blvd</p>
                        <p>Round Rock, TX 78665</p>
                                <p>512-248-2156</p>      
                    </div>
                   
                        <div className={classes.jo_stores}> 
                        <h2>JOANN Austin, TX</h2>
                        <p>10515 N Mopac Expy</p>
                        <p>Austin, TX 78759</p>
                                <p>512-795-8086</p>      
                    </div>
                </div>
            </div>
        </div>
    )
}
