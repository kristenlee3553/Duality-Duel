import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoBattle.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import "../Fonts/EBGaramond-VariableFont_wght.ttf"
import { useState, useEffect } from 'react';
import { SceneData } from '../Data/SceneData';
import { handleGemeniAPICall } from '../AI/Gemeni';

function EgoBattle() {

    const [sceneNum, SetSceneNum] = useState(0);
    const [prompt, setPrompt] = useState("Say hi to me!");
    const [response, setResponse] = useState("");
    
    useEffect(() => {
        async function getAIResponse() {
            const AIResponse = await handleGemeniAPICall(prompt);
            setResponse(AIResponse);
        };
        
        getAIResponse()
    }, [prompt])
    
    return (
        <div>
            {/* Header Text*/}
            <div>
                <div class="image-overlay">
                    <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                    <div class="overlay-text"> 
                        <h1 class="evil-title-text">{SceneData[sceneNum].sceneTitle}</h1> 
                    </div> 
                </div>
            </div>
            <p>{response}</p>
            {/* Choices Text*/}
            <div class="center-choicediv">
                <button className={"btn evil-image-button "} type='button'>
                    <span className="button-text">I guess you're right...</span>
                </button>
                <button className={"btn evil-image-button "} type='button'>
                    <span className="button-text">I guess you're right...</span>
                </button>
                <button className={"btn evil-image-button "} type='button'>
                    <span className="button-text">I guess you're right...</span>
                </button>
            </div>
        </div>
    );
}

export default EgoBattle;