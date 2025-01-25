export default function LoseAlert(props) {
    if(props.lose){
        return(
            <div className="absolute flex flex-col items-center justify-center bg-blue-950 border-4 w-150 h-100">
                <p className="text-xl text-white mb-5">You lose. Your score was {props.score}!</p>
                <div className="flex justify-center text-white">
                    <button className="disabled bg-red-600 w-20 h-15 cursor-not-allowed hover:bg-red-700">No</button>
                    <button className="bg-green-600 w-20 h-15 hover:bg-green-700 cursor-pointer" onClick={props.newGame}>Yes</button>
                </div>
            </div>
        )
    }
    return null;
}