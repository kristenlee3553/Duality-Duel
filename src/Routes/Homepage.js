import "../Styles/Homepage.css";
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="homepage">
            <div className="buttonsContainer">
                <button className="button">Play</button>
                <button className="button">Settings</button>
                <Link to="/credits">
                    <button className="button">Credits</button>
                </Link>
                <button className="button">Exit</button>
            </div>
        </div>
    );
}

export default Homepage;
