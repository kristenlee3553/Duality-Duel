import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";

function EgoChoices() {
return (
    <div>
        {/* Header Text*/}
        <div class= "">
            <div class="image-overlay">
                <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                <div class="overlay-text"> 
                    <h1>Text Over the image(Responsive image).</h1> 
                </div> 
            </div>
        </div>
        <div class = "blue">
            
        </div>
    </div>
  );
}

export default EgoChoices;