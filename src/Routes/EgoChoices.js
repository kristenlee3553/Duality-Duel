import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import { useState, useEffect } from 'react';
import { SceneData } from '../Data/SceneData';
import ChoiceBubble from '../Components/ChoiceBubble';
import { handleGemeniAPICall } from '../AI/Gemeni';

function EgoChoices() {

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
                    <div class="overlay-text scene-title-text"> 
                        <h1>{SceneData[sceneNum].sceneTitle}</h1> 
                    </div> 
                </div>
            </div>

            {/* Choices Text*/}
            <div>
                <p>{response}</p>
                <ChoiceBubble sceneNum={sceneNum} choiceNum={"choice1"}/>
                <ChoiceBubble sceneNum={sceneNum} choiceNum={"choice2"}/>
                <ChoiceBubble sceneNum={sceneNum} choiceNum={"choice3"}/>
                <ChoiceBubble sceneNum={sceneNum} choiceNum={"choice4"}/>
            </div>
        </div>
    );
}

export default EgoChoices;