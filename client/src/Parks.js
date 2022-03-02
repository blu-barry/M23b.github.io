
import { Link } from 'react-router-dom';


const Parks = ( { parks } ) => {
    //const { data: parks, isPending, error } = useFetch("https://developer.nps.gov/api/v1/parks?limit=1000&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE");
    console.log(parks);
    //const parks = data;
    //const [Activities, setActivities] = useState([]);

    /*const handleActivitySearch = (activity) => {
        const newParks = parks.filter(park => park.activities !== activity);
        setParks(newParks);
    }*/
    return (
        <div className="park-list">
          {parks.map((park) => (
            <div className="park-details" key={(park.parkCode)}>
              <Link to={`/Parks/${park.parkCode}`}>
                <h2>{ park.fullName }</h2>
                <p>{ park.addresses[0].city } , { park.addresses[0].stateCode}</p>
              </Link>
            </div>
          ))}
        </div>
      );
}
 
export default Parks;