export default function LoseAlert(props) {
    if(props.lose){
        return(
            <div className="text-white p-20 rounded-xl bg-slate-200 absolute">
                chujchujchuj
            </div>
        )
    }
    return null;
}