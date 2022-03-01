import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import useFetch from "../useFetch";
import { Link } from 'react-router-dom';

const ActivityListDetails = () => {
    const { id } = useParams();
    const { data: activity, error, isPending } = useFetch( 'https://developer.nps.gov/api/v1/activities/parks?id='+id+'&limit=3&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE');
    
    return ( 
        <div className="park-list">
            <h2> HI Yall { activity.data.name } </h2>
                {activity.data.map((parks) => (
                    <div className="park-list">
                        {parks.map((park) => (
                            <Link to={`/Parks/${park.parkCode}`}>
                            <h2>{ park.fullName }</h2>
                            </Link>
                        ))}
                    </div>
                        
                ))}
        </div>
     );
}
 
export default ActivityListDetails;