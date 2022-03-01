import { useParams } from "react-router";
import useFetch from "../useFetch";

const Park = () => {
    const { parkCode } = useParams();
    console.log(parkCode);
    const { data: park, error, isPending } = useFetch('https://developer.nps.gov/api/v1/parks?parkCode=' + parkCode + '&api_key=gUeSemHr93mXuKE5WqakVIaO2cDN67aqXettWyDE');
    return (
        <div className="park-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { park && (
                <article> 
                    <h2> { park.fullName } </h2>
                    <div> { park.description} </div>
                    <img> </img>
                </article>
                
            )}
        </div>
    );
}
 
export default Park;