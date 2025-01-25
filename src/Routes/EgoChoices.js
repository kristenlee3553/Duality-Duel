import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import { useState } from 'react';
import { SceneData } from '../Data/SceneData';

function EgoChoices() {

    const [sceneNum, SetSceneNum] = useState(0)
    
return (
    <div>
        {/* Header Text*/}
        <div class= "">
            <div class="image-overlay">
                <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                <div class="overlay-text"> 
                    <h1>{SceneData[0].sceneTitle}</h1> 
                </div> 
            </div>
        </div>
    </div>
  );
}

export default EgoChoices;