import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

export default function DroneMap(){
    const [drones, setDrones] = useState([]);

    useEffect(() =>{
        axios.get("/drones").then((res) => setDrones(res.data))
    }, [])

    return (
        <MapContainer center = {[19.076, 72.8777]} zoom = {13} style = {{height: "400px"}}>
           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           {drones.map((drone) =>(
            <Marker key = {drone._id} position={drone.location.coordinates.reverse()}>
                <Popup>
                    ID: {drone._id} <br/>
                    Battery: {drone.battery}%
                </Popup>
            </Marker>
           ))}
        </MapContainer>
    )
}