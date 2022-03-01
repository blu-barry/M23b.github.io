import { Link } from "react-router-dom";

const AllParkList = ({parks, title}) => {
    //const parks = props.parks;
    //const title = props.title;

    return (
        <div className="parks-list">
            <h2>{ title } </h2>
            {parks.data.map((park) => (
                <div className="park-preview" keys={park.id}>
                    <Link to={'/Parks/${park.id}'}> 
                    <h2>{ park.fullName } </h2>
                    <div> { park.addresses[0].line1} , { park.addresses[0].city} , { park.addresses[0].stateCode} , { park.addresses[0].postalCode}</div>
                    <p> { park.description} </p>
                    </Link> 
                </div>
            ))}
        </div>
    );
}
 
export default AllParkList;