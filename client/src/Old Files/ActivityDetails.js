import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Parks from '../Parks';

const ActivityDetails = ( { parks } ) => {
    const { id } = useParams();
    console.log(id);
    const { data: activity, error, isPending } = useFetch('https://developer.nps.gov/api/v1/activities/parks?id='+id+'&limit=3&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE');
    console.log(activity);
    //console.log(activity.data[0].parks);
    //const activities = park.data[0].activities;
    return (
        <div className="park-details">
            <h2>Hi</h2>
        </div>
    );
}
 
export default ActivityDetails;
