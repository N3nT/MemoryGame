//import { useEffect, useState } from 'react'
import Card from "./components/Card";

function App() {
  const id = [1, 5, 100, 69, 32];

  return (
    <>
    <h1 className="text-3xl font-bold underline">asd</h1>
     {id.map((index) => {
        return(
          <Card key={index} id={index}/>
        )
      })}
    </>
  )
}

export default App
