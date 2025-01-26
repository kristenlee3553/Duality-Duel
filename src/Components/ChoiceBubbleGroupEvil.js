import { useState } from "react"
import ChoiceBubbleEvil from "./ChoiceBubbleEvil";

function ChoiceBubbleGroupEvil({ choices, onChoiceSelected }) {
    
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceSelect = (choiceNum) => {
      setSelectedChoice(choiceNum); // Set the selected choice number
      onChoiceSelected(choiceNum); // Call parent function
    };
  
    return (
        <div className="d-flex flex-row mb-3">
            {choices.map((choice, index) => (
                <ChoiceBubbleEvil
                    choice={choice}
                    choiceNum={index}
                    isSelected={selectedChoice === index} // Pass the selected state
                    onSelect={handleChoiceSelect} // Pass the function to update selected state
                />
            ))}
        </div>
    );
}

export default ChoiceBubbleGroupEvil;