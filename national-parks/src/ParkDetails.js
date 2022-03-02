import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Webcams from "./Webcams";

function ParkDetails() {
    const { parkCode } = useParams();
    console.log(parkCode);
    const { data: park, error, isPending } = useFetch('https://developer.nps.gov/api/v1/parks?parkCode='+parkCode+'&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE');
    console.log(park);

    
    //const activities = park.data[0].activities;
    return (
        <div className="park-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { park && (
                <article> 
                    <h2>{ park.data[0].fullName } </h2 >
                    <p> { park.data[0].addresses[0].line1 } { park.data[0].addresses[0].city } { park.data[0].addresses[0].stateCode } , { park.data[0].addresses[0].postalCode }</p>
                    <div> { park.data[0].description } </div>
                    <div> < Webcams parkCode={park.parkCode} images={park.data[0].images}/> </div>
                    
                </article>
            )}
            
        </div>
    );
}
 
export default ParkDetails;