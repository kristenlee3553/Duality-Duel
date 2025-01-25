import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import { useState, useEffect } from 'react';
import { SceneData } from '../Data/SceneData';
import ChoiceBubble from '../Components/ChoiceBubble';
import { handleGemeniAPICall } from '../AI/Gemeni';

function EgoChoices() {

    const [sceneNum, SetSceneNum] = useState(0);
    //const [prompt, setPrompt] = useState("Say hi to me!");
    //const [response, setResponse] = useState("");
    const [prompt, setPrompt] = useState("Say hi to me!");
    const [response, setResponse] = useState("");
    const [evil, setEvil] = useState(false);
    const evilState = evil? "evil" : "not-evil";
    
/*     useEffect(() => {
        async function getAIResponse() {
            const AIResponse = await handleGemeniAPICall(prompt);
            setResponse(AIResponse);
        };
        
        getAIResponse()
    }, [prompt]) */

    const handleEvilClick = () => {
        setEvil(!evil)
    }
    
    return (
        <div>
            {/* Header Text*/}
            <div>
                <div class="image-overlay">
                    <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                    <div class="overlay-text"> 
                        <h1 class={"scene-title-text " + evilState}>{SceneData[sceneNum].sceneTitle}</h1> 
                    </div> 
                </div>
            </div>
        {/* Choices Text*/}
        <div class="center-choicediv">
          <table>
            <th><div class="stagger"><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice1"}/></div></th>
            <th><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice2"}/></th>
            <th><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice3"}/></th>
            <th><ChoiceBubble sceneNum={sceneNum} choiceNum={"choice4"}/></th>
          </table>
            </div>
            <button type='button' onClick={() => handleEvilClick()}>Change to evil</button>
        </div>
    );
}

export default EgoChoices;