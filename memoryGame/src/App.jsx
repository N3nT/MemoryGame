//import { useEffect, useState } from 'react'
import Card from "./components/Card";

function App() {
  const id = [1, 5, 100, 69, 32];

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-700 to-blue-950">
     {id.map((index) => {
        return(
          <Card key={index} id={index}/>
        )
      })}
    </div>
  )
}

export default App
