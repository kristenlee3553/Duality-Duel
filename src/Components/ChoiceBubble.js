import { useState } from "react"
import SelectedChoice from "../Images/ChoiceCircleSelected.png"
import UnSelectedChoice from "../Images/ChoiceCircleUnselected.png"

function ChoiceBubble({ name }) {
    
    const [selected, SetSelected] = useState(false)
    const buttonImg = selected? SelectedChoice : UnSelectedChoice

    const handleClick = () => {
        SetSelected(!selected)
    }
    return (
        <div>
            <button className="btn" type='button' onClick={() => handleClick()}>
                <img src={buttonImg} className="img-fluid" alt="Button"></img>
            </button>
        </div>
    )
}

export default ChoiceBubble