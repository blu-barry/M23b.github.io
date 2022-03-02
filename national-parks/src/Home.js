import { useEffect, useState } from 'react';
import Parks from './Parks';
import useFetch from './useFetch';

const Home = () => {
    const { data: parks, isPending, error } = useFetch("https://developer.nps.gov/api/v1/parks?limit=1000&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE");
    //console.log(parks);
    //const parks = data;
    //const [Activities, setActivities] = useState([]);

    /*const handleActivitySearch = (activity) => {
        const newParks = parks.filter(park => park.activities !== activity);
        setParks(newParks);
    }*/

    return (  
        <div className="home">
        <h2>Homepage</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { parks && <Parks parks={parks.data} /> }
        </div>
    );
}
 
export default Home;
