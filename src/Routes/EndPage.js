import "../Styles/EndPage.css"
import { useEffect } from "react";
import { Link } from 'react-router-dom';

// Win = 0, Meh, = 1, Lose = 2
function EndPage({ state }) {

    useEffect(() => {
        // Function to update background size based on the window size
        const updateBackgroundSize = () => {
            const body = document.body;
    
            // Get the window width and height
            const width = window.innerWidth;
            const height = window.innerHeight;
    
            // Apply styles based on the state
            if (state === 0) {
                body.style.backgroundImage = "url('/Images/SuccessBackground.png')"; // Success
            } else if (state === 2) {
                body.style.backgroundImage = "url('/Images/FailBackground.png')"; // Fail
            } else {
                body.style.backgroundImage = "url('/Images/AlmostBackground.png')"; // Almost
            }

            // Set the background size to fit the window size
            body.style.backgroundSize = `${width}px ${height}px`;

            // To avoid the background repeating
            body.style.backgroundRepeat = "no-repeat";
        };

        updateBackgroundSize();

        // Add a resize event listener to adjust background size when the window is resized
        window.addEventListener('resize', updateBackgroundSize);
    
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateBackgroundSize);
            const body = document.body;
            body.style.backgroundImage = ""; // Reset background image
        };
    }, [state]); // Re-run when the state changes


    function GetFirstHalf() {
        if (state === 0) {           
            return "You have successfully "
        }

         else {
            return "You " 
         }
    }

    function GetRedText() {
        if (state === 0) {
            return "acknowledged your shadow"
        }
        else if (state === 1) {
            return "almost "
        }
        else {
            return "did not "
        }
    }

    function GetLastHalf() {
        if (state === 0) {
            return "! The shadow embodies the hidden parts of yourself—traits, emotions, or desires often suppressed or denied. By recognizing it, you’ve taken a step toward greater self-awareness and a more balanced understanding of who you are."
        }
        else if (state === 1) {
            return "fully acknowledged your shadow. At times, you may recognize your shadow, but other times, you may avoid confronting it. This inconsistency can cause emotional strain, as the parts of yourself you avoid continue to surface in unexpected ways."
        }
        else {
            return "acknowledge your shadow. The shadow embodies the hidden parts of yourself—traits, emotions, or desires often suppressed or denied. By denying its existence, you risk projecting these qualities onto others, distorting your perceptions and relationships."
        }
    }

    function GetHeaderText() {
        if (state === 0) {
         return "Success!"   
        }
        else if (state === 1) {
            return "So Close!"
        }
        else {
            return "Not Quite There Yet..."
        }
    }

    function handlePlayAgain() {
        window.location.reload(false);
    }

    return (
        <div>
            <div className="end-title">
                <h1 className="header-text">{GetHeaderText()}</h1>
            </div> 
            <div className="end-description">
                <h3 className="description-text">{GetFirstHalf()}
                    <span  style={{color: "red"}}>{GetRedText()}</span>
                    <span>{GetLastHalf()}</span>
                </h3>
            </div>
            <button className='buttonPlayAgain' onClick={handlePlayAgain}>Play Again</button>
            <Link to="/">
                <button className='buttonExit'>Exit</button>
            </Link>
        </div>
    );
}

export default EndPage;