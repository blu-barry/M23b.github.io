import { useParams } from "react-router";
import ParkImageView from "./ParkImageView";
import useFetch from "./useFetch";

const ParkImageViewControl = ( { parkCode } ) => {
    console.log(parkCode);
    const { data: park, error, isPending } = useFetch('curl -X GET "https://developer.nps.gov/api/v1/webcams?parkCode='+parkCode+'&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE');
    return (
        <div> 
            {park.data[0].images.map((image) => (
                <img>
                    <img className="static-photo" src={image.url} alt={""}/>
                </img>
            ))}
        </div>
                    
    );
}
 
export default ParkImageViewControl;