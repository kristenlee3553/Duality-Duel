import "../Styles/Homepage.css";
import { Link } from 'react-router-dom';
import Hooded from '../Images/hooded.png';
import Evil from '../Images/evil.png';

function Homepage() {
    return (
        <div className="homepage">
            {/* Images */}
            <img src={Hooded} alt="Hooded Sprite" className="bottomLeftImage" />
            <img src={Evil} alt="Evil Sprite" className="topRightImage" />

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
