
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


const ParkComponent = () => {
    const { park } = useParams();
    console.log(park);
    //const { activityId, activityName, activityParks} = useParams();
    /* This park component is only used for use in the activities pipeline as it does not use an api call and requires more params*/
    return (
        <Link to={`/Parks/${park.parkCode}`}>
            <div className="park-details">
                    <article> 
                        <h3>{ park.data[0].fullName } </h3>
                        <p> { park.data[0].addresses[0].line1 } { park.data[0].addresses[0].city } { park.data[0].addresses[0].stateCode } , { park.data[0].addresses[0].postalCode }</p>
                        <div> { park.data[0].description } </div>
                        <div> </div> 
                    </article>
            </div>
        </Link>
    );
}
 
export default ParkComponent;