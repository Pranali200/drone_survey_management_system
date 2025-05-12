import axios from "../api/axiosConfig";
import {useEffect, useState} from "react"

export default function DroneStats(){
    const [stats, setStats] = useState({});

    useEffect(() =>{
        axios.get("/drones/stats").then((res) =>setStats(res.data));
    }, []);

    return(
      <div>
        <p>Total Drones: {stats.total}</p>
        <p>In Mission: {stats.inMission}</p>
        <p>Available: {stats.available}</p>
      </div>
    )
}
