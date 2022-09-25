import React, {useState} from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Icon, LatLngExpression } from "leaflet";
import L from 'leaflet';
import * as iconRes from '../../public/cancel.svg'




export default function Maps({latitude, setIsMapLoaded, longitude, icon_1, placesIcon, places, isPlaceeSelected}:any){

    const userIcon = new L.Icon({
        iconUrl: icon_1,
    });

    const placeIcon = new L.Icon({
        iconUrl: placesIcon,
    });
    

    const defaultPosition: LatLngExpression = [latitude, longitude]; // Paris position
    

    return(
        <>
            <MapContainer  center={defaultPosition} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/leonardofariaoliveira/cl8594gwo002w14qkyorcx8zo/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGVvbmFyZG9mYXJpYW9saXZlaXJhIiwiYSI6ImNsMzRxZGs4MjJzYmEzY281a3k1YTBseXkifQ.TaND790jdMNoGyxXNfXPmg&zoomwheel=true&fresh=true#4/16.61/0.72"
                />
                {/* https://api.mapbox.com/styles/v1/leonardofariaoliveira/cl8594gwo002w14qkyorcx8zo.html/tiles/512/1/10@2x?access_token=pk.eyJ1IjoibGVvbmFyZG9mYXJpYW9saXZlaXJhIiwiYSI6ImNsMzRxZGs4MjJzYmEzY281a3k1YTBseXkifQ.TaND790jdMNoGyxXNfXPmg&zoomwheel=true&fresh=true#4/16.61/0.72 */}
                <Marker icon={userIcon} position={defaultPosition}>
                </Marker>
                {places.map((place:any)=> (
                                    <Marker icon={placeIcon} position={[place.latitude, place.longitude]}>
                                    <Popup>
                                        {place.nome}
                                    </Popup>
                                </Marker>
                ))}
                </MapContainer>    
        </>
        
       
    )

}
