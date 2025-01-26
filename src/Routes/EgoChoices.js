import SceneBackground from '../Images/SceneText.png';
import HoodedFigure from '../Images/hooded.png';
import EvilFigure from '../Images/evil.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf";
import { useState } from 'react';
import { SceneData } from '../Data/SceneData';
import { handleGemeniAPICall } from '../AI/Gemeni';
import ChoiceBubbleGroup from '../Components/ChoiceBubbleGroup';
import ChoiceBubbleGroupEvil from '../Components/ChoiceBubbleGroupEvil';
import { GetPersonaPrompt, GetShadowPrompt } from '../Data/GeminiPrompts';
import EndPage from './EndPage';

function EgoChoices() {
    const [sceneNum, setSceneNum] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(0);
    const [sceneType, setSceneType] = useState(["choices"]);
    const [choices, setChoices] = useState([]);
    const [shadowText, setShadowText] = useState([])
    const [evilCounter, setEvilCounter] = useState(0);
    const [cutsceneText, setCutsceneText] = useState("");

    function GetChoicesText() {
        const choiceArray = []

        choiceArray[0] = SceneData[0].choices["choice" + choices[0]]
        choiceArray[1] = SceneData[1].choices["choice" + choices[1]]
        choiceArray[2] = SceneData[2].choices["choice" + choices[2]]
        choiceArray[3] = SceneData[3].choices["choice" + choices[3]]
        choiceArray[4] = SceneData[4].choices["choice" + choices[4]]

        return choiceArray
    }

    async function getAIResponse() {
        const AIResponse = await handleGemeniAPICall(GetPersonaPrompt(GetChoicesText()));
        const AIShadowResponse = await handleGemeniAPICall(GetShadowPrompt());

        let trimmed = AIShadowResponse.split('[').pop().split(']').shift();
        let shadowTextArray = trimmed.match(/"([^"]+)"/g).map(item => item.replace(/"/g, ''));
        setShadowText(shadowTextArray);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function cutscene() {
        setCutsceneText('Oh, you thought you were just going on a journey, did you?');
        await sleep(2000);
        setCutsceneText('You can\'t run anymore.');
        await sleep(2000);
        setCutsceneText('You can\'t run from yourself.');
        await sleep(2000);
        setCutsceneText('I know who you are. But do you know who you are?');
        await sleep(2000);
        setSceneNum(0);
        setChoices(["That's not true!", "I'm not sure...", "You're right."]);
        setSceneType("battle");
    }

    const handleClick = () => {
        if (sceneType == "choices") {
            setChoices((choices) => [...choices, selectedChoice]);
            setSelectedChoice(5)

            // Last scene and user clicks next
            if (sceneNum == 4) {
                getAIResponse();
                setSceneType("dream");
                cutscene();
            }
            // Next Scene
            else {
                setSceneNum(sceneNum + 1);
            }
        }
        else if (sceneType == "battle") {
            if (selectedChoice === 1) {
                setEvilCounter(evilCounter + 1);
            }
            else if (selectedChoice === 2) {
                setEvilCounter(evilCounter + 2);
            }

            // Last scene and user clicks next
            if (sceneNum === 2) {
                setSceneType("end");
            }
            // Next Scene
            else {
                setSceneNum(sceneNum + 1);
            }
        }
    };

    const handleChoiceSelected = (choiceNum) => {
        setSelectedChoice(choiceNum); // Update the selected choice state
        handleClick()
    };
    
    if (sceneType == "choices") {
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
            </div>
        );
    }
    else if (sceneType == "dream") {
        return (
            <div>
                <div>
                    <div class="image-overlay">
                        <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                        <img src={HoodedFigure} class="img-figure" alt='Scene Text Background'></img>
                        <div class="overlay-text"> 
                            <h1 class="dream-title-text">{cutsceneText}</h1> 
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
    else if (sceneType == "battle") {
        return (
            <div>
                {/* Header Text*/}
                <div>
                    <div class="image-overlay">
                        <img src={SceneBackground} class="img-fluid" alt='Scene Text Background'></img>
                        <img src={EvilFigure} class="img-evil" alt='Scene Text Background'></img>
                        <div class="overlay-text"> 
                            <h1 class="evil-title-text">{shadowText[sceneNum]}</h1>
                        </div> 
                    </div>
                </div>
                {/* Choices Text*/}
                <div class="center-choicediv">
                    <ChoiceBubbleGroupEvil choices={choices} onChoiceSelected={handleChoiceSelected}></ChoiceBubbleGroupEvil>
                </div>
            </div>
        );
    }
    else if (sceneType == "end") {
        return (
            <div>
                <EndPage
                    state={evilCounter}
                />
            </div>
        );
    }
}

export default EgoChoices;