import "../Styles/EndPage.css"
import { useEffect } from "react";

// Win = 6, Meh, = 1-5, Lose = 0
function EndPage({ state }) {
    useEffect(() => {
        // Access the body element
        const body = document.body;

        // Apply styles based on the state
        if (state === 6) {
            body.style.backgroundImage = "url('/Images/SuccessBackground.png')"; // Success
            console.log("here")
        } else if (state === 0) {
            body.style.backgroundImage = "url('/Images/FailBackground.png')"; // Fail
        } else {
            body.style.backgroundImage = "url('/Images/AlmostBackground.png')"; // Almost
        }

        body.style.backgroundSize = "cover"

        // Cleanup to reset the background color when the component is unmounted or state changes
        return () => {
            body.style.backgroundImage = ""; // Reset background color
        };
    }, [state]); // Re-run when the state changes

    function GetDescription() {
        var end_description = "";
        if (state === 0) {
            end_description = "You have successfully acknowledged your shadow ! The shadow embodies the hidden parts of yourself—traits, emotions, or desires often suppressed or denied. By recognizing it, you’ve taken a step toward greater self-awareness and a more balanced understanding of who you are."
        }
         else if (state === 1) {
            end_description = "You almost fully acknowledged your shadow. At times, you may recognize your shadow, but other times, you may avoid confronting it. This inconsistency can cause emotional strain, as the parts of yourself you avoid continue to surface in unexpected ways."
         } else {
            end_description = "You did not acknowledge your shadow. The shadow embodies the hidden parts of yourself—traits, emotions, or desires often suppressed or denied. By denying its existence, you risk projecting these qualities onto others, distorting your perceptions and relationships." 
         }
         return end_description
    }
    var description = GetDescription();

    return (
        <div>
            <p>{state}</p>
            <p>{description}</p>
        </div>
    );
}

export default EndPage;