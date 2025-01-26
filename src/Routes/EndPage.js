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

    return (
        <div>
            <h1>{state}</h1>
        </div>
    );
}

export default EndPage;