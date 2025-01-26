import { useState } from "react"
import "../Fonts/EBGaramond-VariableFont_wght.ttf"
import "../Styles/ChoiceBubbleEvil.css"

function ChoiceBubbleEvil({ choice, choiceNum, isSelected, onSelect }) {
    
    const selectedStateStyle = isSelected ? 'evil-selected' : 'evil-not-selected';

    const handleClick = () => {
        onSelect(choiceNum); // Notify parent about the selected choice
    };

    return (
        <div className="evil-stagger">
            <button className={"btn evil-image-button " + selectedStateStyle} type='button' onClick={() => handleClick()}>
                <span className="evil-button-text">{choice}</span>
            </button>
        </div>
    )
}

export default ChoiceBubbleEvil;