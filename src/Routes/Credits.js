import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Credits.css";
import Amanda from '../Images/Amanda.png'
import Savannah from '../Images/Savannah.png'
import Kristen from '../Images/Kristen.png'
import Cynthia from '../Images/Cynthia.png'

function Credits() {
  return (
    <div className="creditsPage">
        <h1>Credits</h1>
      
        <div className="container-person">
            <div className="person">
                <img className="photo savannah"/>
                <div className="photo-text">
                    <div className="nameContainer">Savannah Han</div>
                    <div className="roleContainer">Design & Front-End</div>
                </div>
            </div>
            <div className="person">
                <img className="photo kristen"/>
                <div className="photo-text">
                    <div className="nameContainer">Kristen Lee</div>
                    <div className="roleContainer">Front-End & Back-End</div>
                </div>
            </div>
            <div className="person">
                <img className="photo amanda"/>
                <div className="photo-text">
                    <div className="nameContainer">Amanda Li</div>
                    <div className="roleContainer">Design & Front-End</div>
                </div>
            </div>
            <div className="person">
                <img className="photo cynthia"/>
                <div className="photo-text">
                    <div className="nameContainer">Cynthia Wang</div>
                    <div className="roleContainer">AI & Front-End</div>
                </div>
            </div>
        </div>

        {/* Back button */}
        <Link to="/">
                <button className="backButton">Back to Homepage</button>
        </Link>
    </div>
  );
}

export default Credits;
