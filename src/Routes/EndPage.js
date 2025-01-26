import "../Styles/EndPage.css"

// Win = 0, Meh, = 1, Lose = 2
function EndPage({ state }) {

    function GetBackgroundStyle() {
        if (state === 0) {
            return "success-background"
        }
        else if (state === 1) {
            return "almost-background"
        }
        else {
            return "fail-background"
        }
    }
    return (
        <div>
            <div className= {GetBackgroundStyle()}>
            <h1>{GetBackgroundStyle()}</h1>
            </div>
        </div>
    );
}

export default EndPage;