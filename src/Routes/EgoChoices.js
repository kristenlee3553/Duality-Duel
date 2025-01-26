import SceneBackground from '../Images/SceneText.png';
import HoodedFigure from '../Images/hooded.png';
import EvilFigure from '../Images/evil.png';
import BlackScreen from '../Images/CutSceneText.png';
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf";
import { useState } from 'react';
import { SceneData } from '../Data/SceneData';
import { handleGeminiAPICall } from '../AI/Gemini';
import ChoiceBubble from '../Components/ChoiceBubble';
import ChoiceBubbleEvil from '../Components/ChoiceBubbleEvil';
import { GetPersonaPrompt, GetShadowPrompt } from '../Data/GeminiPrompts';
import EndPage from './EndPage';

function EgoChoices() {
    const [sceneNum, setSceneNum] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(10);
    const [sceneType, setSceneType] = useState(["choices"]);
    const [choices, setChoices] = useState([]);
    const [shadowText, setShadowText] = useState([])
    const [evilCounter, setEvilCounter] = useState(0);
    const [cutsceneText, setCutsceneText] = useState("");

    const evilChoices = 
    [["That's not true!", "I'm not sure...", "You're right."],
    ["Stop talking!", "Maybe you're right...", "I know."],
    ["You're wrong!", "I don't know about that...", "I accept that part of me."]]

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
        const AIResponse = await handleGeminiAPICall(GetPersonaPrompt(GetChoicesText()));
        const AIShadowResponse = await handleGeminiAPICall(GetShadowPrompt());

        let trimmed = AIShadowResponse.split('[').pop().split(']').shift();
        let shadowTextArray = trimmed.match(/"([^"]+)"/g).map(item => item.replace(/"/g, ''));
        setShadowText(shadowTextArray);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function cutScene1() {
        await sleep(4000);
        setSceneType("dream")
        cutscene2()
    }

    async function cutscene2() {
        setCutsceneText('Oh, you thought you were just going on a journey, did you?');
        await sleep(3000);
        setCutsceneText('You can\'t run anymore.');
        await sleep(2500);
        setCutsceneText('You can\'t run from yourself.');
        await sleep(2500);
        setCutsceneText('I know who you are. But do you know who you are?');
        await sleep(3000);
        setSceneNum(0);
        setChoices(evilChoices[0]);
        setSceneType("battle");
        
        const body = document.body;
    
        // Get the window width and height
        const width = window.innerWidth;
        const height = window.innerHeight;

        body.style.backgroundImage = "url('/Images/evilBackground.png')";
        body.style.backgroundSize = `${width}px ${height}px`;
    }

    const handleClick = async (choiceNum) => {
        if (sceneType == "choices") {
            console.log(choiceNum)
            setChoices((choices) => [...choices, choiceNum]);
            
            await sleep(500)
            setSelectedChoice(10)
            // Last scene and user clicks next
            if (sceneNum == 4) {
                getAIResponse();
                setSceneType("dark");
                cutScene1();
            }
            // Next Scene
            else {
                setSceneNum(sceneNum + 1);
            }
        }
        else if (sceneType == "battle") {
            if (choiceNum === 1) {
                setEvilCounter(evilCounter + 1);
            }
            else if (choiceNum === 2) {
                setEvilCounter(evilCounter + 2);
            }

            await sleep(400)

            setSelectedChoice(10)

            // Last scene and user clicks next
            if (sceneNum === 2) {
                setSceneType("end");
            }
            // Next Scene
            else {
                setChoices(evilChoices[sceneNum + 1])
                setSceneNum(sceneNum + 1);
            }
        }
    };

    const handleChoiceSelected = (choiceNum) => {
        handleClick(choiceNum)
    };

    function GetEndState() {
        if (evilCounter === 6) {
            return 0
        }
        else if (evilCounter >= 3) {
            return 1
        }
        return 2
    }
    
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
                <div className="d-flex flex-row mb-3 center-choicediv">
                    <ChoiceBubble
                        sceneNum={sceneNum}
                        choiceNum= {0}
                        isSelected={selectedChoice === 0} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                    <ChoiceBubble
                        sceneNum={sceneNum}
                        choiceNum= {1}
                        isSelected={selectedChoice === 1} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                    <ChoiceBubble
                        sceneNum={sceneNum}
                        choiceNum= {2}
                        isSelected={selectedChoice === 2} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                    <ChoiceBubble
                        sceneNum={sceneNum}
                        choiceNum= {3}
                        isSelected={selectedChoice === 3} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                </div>
            </div>
        );
    }
    else if (sceneType == "dark") {
        return (
            <img src={BlackScreen} class="black-screen" alt='Scene Text Background'></img>
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
                        <img src={EvilFigure} class="img-evil" alt='Hooded Figure'></img>
                        <div class="overlay-text"> 
                            <h1 class="evil-title-text">{shadowText[sceneNum]}</h1>
                        </div>
                    </div>
                </div>
                {/* Choices Text*/}
                <div className="d-flex flex-row mb-3 center-choicediv">
                    <ChoiceBubbleEvil
                        choice={choices[0]}
                        choiceNum={0}
                        isSelected={selectedChoice === 0} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                    <ChoiceBubbleEvil
                        choice={choices[1]}
                        choiceNum={1}
                        isSelected={selectedChoice === 1} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                    <ChoiceBubbleEvil
                        choice={choices[2]}
                        choiceNum={2}
                        isSelected={selectedChoice === 2} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                </div>
                <div>
                    {evilCounter}
                </div>
            </div>
        );
    }
    else if (sceneType == "end") {
        return (
            <div>
                <h1>{evilCounter}</h1>
                <EndPage
                    state={GetEndState()}
                />
            </div>
        );
    }
}

export default EgoChoices;