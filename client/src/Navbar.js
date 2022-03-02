import App from "./App";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>U.S. National Parks</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/ParksList">Parks</Link>
                <Link to="/ActivitiesList">Activities</Link>
                <Link to="/Webcams">Webcams</Link>
            </div>
        </nav>
    );
}

export default Navbar;