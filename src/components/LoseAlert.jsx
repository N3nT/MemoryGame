export default function LoseAlert(props) {
    if(props.lose){
        return(
            <div className="absolute flex items-center justify-center bg-blue-950 border-4 w-150 h-100">
                <p className="text-xl text-white">You lose. Your score was {props.score}!</p>
            </div>
        )
    }
    return null;
}