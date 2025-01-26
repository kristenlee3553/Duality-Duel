import { useState } from "react"
import { SceneData } from "../Data/SceneData";
import ChoiceBubble from "./ChoiceBubble";

function ChoiceBubbleGroup({ sceneNum, onChoiceSelected }) {
    
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceSelect = (choiceNum) => {
      setSelectedChoice(choiceNum); // Set the selected choice number
      onChoiceSelected(choiceNum); // Call parent function
    };

    const choices = Object.values(SceneData[sceneNum].choices);
  
    return (
        <div className="d-flex flex-row mb-3">
        {choices.map((choice, index) => (
            <ChoiceBubble
            key={index}
            sceneNum={sceneNum}
            choiceNum={index}
            isSelected={selectedChoice === index} // Pass the selected state
            onSelect={handleChoiceSelect} // Pass the function to update selected state
        />
        ))}
        </div>
    );
}

export default ChoiceBubbleGroup