
import useFetch from './useFetch';
import { Link, useParams } from "react-router-dom";


const Activity = () => {
    const { id } = useParams();
    const { data: activity, isPending, error } = useFetch('https://developer.nps.gov/api/v1/activities/parks?id='+id+'&limit=1&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE');
    //console.log(Alldata);
    //console.log(parks);
    //const parks = data;
    //const [Activities, setActivities] = useState([]);

    /*const handleActivitySearch = (activity) => {
        const newParks = parks.filter(park => park.activities !== activity);
        setParks(newParks);
    }*/

    return (
        
        <div className="ParksList">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { activity && 
                <div className="park-list">
                    <h2> Parks that offer { activity.data[0].name } activities</h2>
                    {activity.data[0].parks.map((park) => (
                        <div className="park-preview" key={(park.parkCode)}>
                            <Link to={`/Parks/${park.parkCode}`}>
                                <h2>{ park.fullName }</h2>
                            </Link>
                        </div>
                    ))}
                </div> }
        </div>
    );
}

export default Activity;