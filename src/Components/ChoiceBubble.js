import { useState } from "react"
import "../Fonts/EBGaramond-VariableFont_wght.ttf"
import "../Styles/ChoiceBubble.css"
import { SceneData } from "../Data/SceneData"

function ChoiceBubble({ sceneNum, choiceNum, isSelected, onSelect }) {
    
    const selectedStateStyle = isSelected ? 'selected' : 'not-selected';

    const choiceKey = "choice" + choiceNum

    const handleClick = () => {
        onSelect(choiceNum); // Notify parent about the selected choice
    };

    return (
        <div className="stagger">
            <button className={"btn image-button " + selectedStateStyle} type='button' onClick={() => handleClick()}>
                <span className="button-text">{SceneData[sceneNum].choices[choiceKey]}</span>
            </button>
        </div>
    )
}

export default ChoiceBubble