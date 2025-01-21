function Help( {display} ) {
    if(display){
        return(<div className="bg-slate-300 p-20 rounded-xl">
            Just don't click on the same card twice, and win!
          </div>)
    }
    return null;
}
export default Help;