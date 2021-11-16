import { useParams } from "react-router";
import useFetch from "./useFetch";

const ParkImageView = ( { images } ) => {
   
    return (
        <div> 
            {images.map((image) => (
                <img className="static-photo" src={image.url} alt={""}/>
            ))}
        </div>
                    
    );
}
 
export default ParkImageView;