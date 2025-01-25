import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import { useState, useEffect } from 'react';
import { SceneData } from '../Data/SceneData';
import ChoiceBubble from '../Components/ChoiceBubble';
import { handleGemeniAPICall } from '../AI/Gemeni';
import ChoiceBubbleGroup from '../Components/ChoiceBubbleGroup';
import NextButton from "../Images/NextButton.png"

function EgoChoices() {

    const [sceneNum, SetSceneNum] = useState(0);
    //const [prompt, setPrompt] = useState("Say hi to me!");
    //const [response, setResponse] = useState("");
    
/*     useEffect(() => {
        async function getAIResponse() {
            const AIResponse = await handleGemeniAPICall(prompt);
            setResponse(AIResponse);
        };
        
        getAIResponse()
    }, [prompt]) */

    
    return (
        <div>
            {/* Header Text*/}
            <div>
                <div class="image-overlay">
                    <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                    <div class="overlay-text"> 
                        <h1 class={"scene-title-text"}>{SceneData[sceneNum].sceneTitle}</h1> 
                    </div> 
                </div>
            </div>
        {/* Choices Text*/}
        <div class="center-choicediv">
            <ChoiceBubbleGroup sceneNum={sceneNum}></ChoiceBubbleGroup>
        </div>

        {/* Next Button*/}
        <div className='d-flex flex-row-reverse'>
            <button className='btn'>
                <img src={NextButton} className='img-fluid' alt='Next Button'></img>
            </button>
        </div>
        </div>
    );
}

export default EgoChoices;