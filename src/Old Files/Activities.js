import { Link } from 'react-router-dom';


const Activities = ( { activities } ) => {
    //const { data: Alldata, isPending, error } = useFetch("https://developer.nps.gov/api/v1/activities/parks?&limit=1000&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE");
    //console.log(Alldata);
    //console.log(parks);
    //const parks = data;
    //const [Activities, setActivities] = useState([]);

    /*const handleActivitySearch = (activity) => {
        const newParks = parks.filter(park => park.activities !== activity);
        setParks(newParks);
    }*/

    return (
        <div className="park-list">
          {activities.map((activity) => ( 
            <div className="park-preview" key={(activity.id)}>
              <Link to={`/Activities/${activity.id}`}>
                <h2>{ activity.name }</h2>
              </Link>
            </div>
          ))}
        </div>
      );
}

export default Activities;