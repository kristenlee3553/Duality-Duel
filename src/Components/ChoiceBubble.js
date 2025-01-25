import { useState } from "react"
import "../Fonts/EBGaramond-VariableFont_wght.ttf"
import "../Styles/ChoiceBubble.css"
import { SceneData } from "../Data/SceneData"

function ChoiceBubble({ sceneNum, choiceNum }) {
    
    const [selected, SetSelected] = useState(false)
    const selectedState = selected? "selected" : "not-selected"

    const handleClick = () => {
        SetSelected(!selected)
    }
    return (
        <div>
            <button className={"btn image-button " + selectedState} type='button' onClick={() => handleClick()}>
                <span className="button-text">{SceneData[sceneNum].choices[choiceNum]}</span>
            </button>
        </div>
    )
}

export default ChoiceBubble