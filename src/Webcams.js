import React from "react";
import ReactDOM from "react-dom";
import useFetch from "./useFetch";

const Webcams = ( { parkCode, images } ) => {
    //const { data: webcam, isPending, error } = useFetch('https://developer.nps.gov/api/v1/webcams?parkCode='+parkCode+'&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE');
    //console.log(parks);
    //const parks = data;
    //const [Activities, setActivities] = useState([]);

    /*const handleActivitySearch = (activity) => {
        const newParks = parks.filter(park => park.activities !== activity);
        setParks(newParks);
    }*/
    console.log(images)
    return (  
        <div className="ParksList">
        <h3>Park Webcams</h3>
        {
                images.map((image)=>(
                    <div className="center-image">
                        <img src={image.url} alt="cannot display" width = "600" height = "400"/>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Webcams;