import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import { useState } from 'react';
import { SceneData } from '../Data/SceneData';
import { handleGemeniAPICall } from '../AI/Gemeni';
import ChoiceBubbleGroup from '../Components/ChoiceBubbleGroup';
import NextButton from "../Images/NextButton.png"
import { GetPersonaPrompt, GetShadowPrompt } from '../Data/GeminiPrompts';
import { Link } from 'react-router-dom';

function EgoChoices() {

    const [sceneNum, SetSceneNum] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(0);

    const [choices, SetChoices] = useState([])

    function GetChoicesText() {
        const choiceArray = []

        choiceArray[0] = SceneData[0].choices["choice" + choices[0]]
        choiceArray[1] = SceneData[1].choices["choice" + choices[1]]
        choiceArray[2] = SceneData[2].choices["choice" + choices[2]]
        choiceArray[3] = SceneData[3].choices["choice" + choices[3]]
        choiceArray[4] = SceneData[4].choices["choice" + choices[4]]

        return choiceArray
    }

    // AI SHAODW RESPONSE HERE IT IS AN ARRAY
    async function getAIResponse() {
        const AIResponse = await handleGemeniAPICall(GetPersonaPrompt(GetChoicesText()));
        const AIShadowResponse = await handleGemeniAPICall(GetShadowPrompt())
    }

    // ADD CODE TO GO TO SHADOW
    const handleClick = () => {

        // Add whatever user chose to choices
        SetChoices((choices) => [...choices, selectedChoice]);

        // Last scene and user clicks next
        if (sceneNum === 4) {
           getAIResponse()
        }

        // Next Scene
        else {
            SetSceneNum(sceneNum + 1)
        }
    };

    const handleChoiceSelected = (choiceNum) => {
        setSelectedChoice(choiceNum); // Update the selected choice state
      };
    
    return (
        <div>
            {/* Header Text*/}
            <div>
                <div class="image-overlay">
                    <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                    <div class="overlay-text"> 
                        <h1 class="scene-title-text">{SceneData[sceneNum].sceneTitle}</h1> 
                    </div> 
                </div>
            </div>
        {/* Choices Text*/}
        <div class="center-choicediv">
            <ChoiceBubbleGroup sceneNum={sceneNum} onChoiceSelected={handleChoiceSelected}></ChoiceBubbleGroup>
        </div>
        <button className="buttonNext" onClick={() => handleClick()}>Next</button>
        </div>
    );
}

export default EgoChoices;