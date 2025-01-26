import SceneBackground from '../Images/SceneText.png'
import "../Styles/EgoChoices.css";
import "../Fonts/MedievalSharp-Regular.ttf"
import { useState } from 'react';
import { SceneData } from '../Data/SceneData';
import { handleGemeniAPICall } from '../AI/Gemeni';
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

    const evilChoices = 
    [["That's not true!", "I'm not sure...", "You're right."],
    ["Stop Talking!", "Maybe you're right...", "I know."],
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
        setShadowText(["I know who you are..."])

        const AIResponse = await handleGemeniAPICall(GetPersonaPrompt(GetChoicesText()));
        const AIShadowResponse = await handleGemeniAPICall(GetShadowPrompt());

        let trimmed = AIShadowResponse.split('[').pop().split(']').shift();
        let shadowTextArray = trimmed.match(/"([^"]+)"/g).map(item => item.replace(/"/g, ''));
        setShadowText(shadowTextArray);
    }

    const handleClick = () => {
        if (sceneType == "choices") {
            setChoices((choices) => [...choices, selectedChoice]);
            setSelectedChoice(10)
            // Last scene and user clicks next
            if (sceneNum == 4) {
                getAIResponse()
                setSceneType("dream");
            }
            // Next Scene
            else {
                setSceneNum(sceneNum + 1);
            }
        }
        else if (sceneType == "dream") {
            setSceneNum(0);
            setChoices(evilChoices[0]);
            setSceneType("battle");
        }
        else if (sceneType == "battle") {
            if (selectedChoice === 1) {
                setEvilCounter(evilCounter + 1);
            }
            else if (selectedChoice === 2) {
                setEvilCounter(evilCounter + 2);
            }

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
    else if (sceneType == "dream") {
        return (
            <div>
                cutscene here
                {/* Next Button*/}
                <div className='d-flex flex-row-reverse'>
                    <button className='buttonNext' onClick={() => handleClick()}>Next</button>
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
                        <div class="overlay-text"> 
                            <h1 class="evil-title-text">{shadowText[sceneNum]}</h1>
                        </div> 
                    </div>
                </div>
                {/* Choices Text*/}
                <div className="d-flex flex-row mb-3 center-choicediv">
                    <ChoiceBubbleEvil
                        choice={choices[0]}
                        choiceNum= {0}
                        isSelected={selectedChoice === 0} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                    <ChoiceBubbleEvil
                        choice={choices[1]}
                        choiceNum= {1}
                        isSelected={selectedChoice === 1} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
                    <ChoiceBubbleEvil
                        choice={choices[2]}
                        choiceNum= {2}
                        isSelected={selectedChoice === 2} // Pass the selected state
                        onSelect={handleChoiceSelected} // Pass the function to update selected state
                    />
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