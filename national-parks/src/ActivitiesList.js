
import useFetch from './useFetch';
import { Link } from 'react-router-dom';


const ActivitiesList = () => {
    const { data: activities, isPending, error } = useFetch("https://developer.nps.gov/api/v1/activities/parks?&limit=1000&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE");
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
            { activities && 
                <div className="park-list">
                    <h2>Available Activities</h2>
                    {activities.data.map((activity) => (
                        <div className="park-preview" key={(activity.id)}>
                            <Link to={`/Activities/${activity.id}`}>
                                <h2>{ activity.name }</h2>
                            </Link>
                        </div>
                    ))}
                </div> }
        </div>
    );
}

export default ActivitiesList;