import { useState } from 'react'
import { CircleHelp } from 'lucide-react';
import Card from "./components/Card";
import Help from "./components/Help";


function App() {
  const [showHelp, setShowHelp] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const id = [1, 5, 100, 69, 32];

  const shuffleArray = (array) => {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

  const handleCardClick = (id) => {
    setClickedCards((prev) => {
      if (!prev.includes(id)) {
        const u = [...prev, id];
        console.log("Clicked Cards:", u);
        return [...prev, id];
      }
      loseGame();
      return prev;
    });
  };

  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  }

  const loseGame = () => {
    alert("You lost game");
    setClickedCards([]);
    //#TODO if score > bestscore: bestscore = score
    setScore(0);
  }

  shuffleArray(id);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-700 to-blue-950">
      <h1 className="text-4xl text-white font-bold mb-5 flex items-center">Memory Game <CircleHelp className="ml-5 hover:text-black cursor-pointer" onClick={handleHelpClick}/></h1>
      <Help display={showHelp}/>
      <div className="flex">
        {id.map((index) => {
          return(
            <Card key={index} id={index} onClick={() => handleCardClick(index)}/>
          )
        })}
      </div>
      <div className='flex text-xl text-white mt-10'>
        <p>Score: {score}</p>
        <p className='ml-5'>Best Score: {bestScore}</p>
      </div>
    </div>
  )
}

export default App
