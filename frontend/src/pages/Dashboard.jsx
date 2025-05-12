import DroneStats from "../components/DroneStats";
import DroneMap from "../components/DroneMap";
export default function Dashboard() {
    return (
        <div>
        <h2>Drone fleet Overview</h2>
        <DroneStats/>
        <DroneMap/>
        </div>
    )
}