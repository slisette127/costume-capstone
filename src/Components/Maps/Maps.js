import React from 'react'
import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api'

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

export default function Maps() {
    return (
        <div>
            <LoadScript googleMapsApiKey="AIzaSyAVA4rcMV0PwCwvOOGJz6MjjZYFePJdv-E">
                <GoogleMap 
                    mapContainerStyle={containerStyle}
                    center={{lat:31.1344, lng:-97.5247}}
                    zoom={8}
                >
                    {/* {markers.map(m => )} */}
                    <Marker position={{lat:31.4994, lng:-97.1504}} 
                            icon={{
                                url:'/needle.png',}}
                        />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
