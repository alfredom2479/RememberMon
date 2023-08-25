import Board from "./components/Board"

import './App.css'
/*import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Card from './components/Card'

const initialCards = [
  {name: 'name1', image:"image1" },
  {name: 'name2', image:"image2" },
  {name: 'name3', image:"image3" },
  {name: 'name4', image:"image4" },
  {name: 'name5', image:"image5" },
  {name: 'name6', image:"image6" },
  {name: 'name7', image:"image7" },
  {name: 'name8', image:"image8" },
  {name: 'name9', image:"image9" },
  {name: 'name10', image:"image10" }
];
*/
function App() {
  //const [cards, setCards] = useState(initialCards);
  /*const cardItems = cards.map((card)=>
    <Card key={card.name}>{card.name}</Card>
  );*/
  /*function randomizeCards(){
    const newCards = [];
    const usedIndices = [];

    while( usedIndices.length < cards.length){
      let nextIdx = 0;
      do{
        nextIdx = Math.floor(Math.random()*cards.length);
      }
      while(usedIndices.includes(nextIdx))
      usedIndices.push(nextIdx);
      newCards.push(cards[nextIdx])
    }
    console.log(usedIndices);
    setCards(newCards);
  }*/
  

  return(
    <>
      <h1>Hello People</h1>
      {/* <button onClick={randomizeCards}>Randomize</button> */}
      {/* {cards.map((card) =>  */}
        {/* <Card key={card.name}>{card.image}</Card> */}
      {/* )} */}
      <Board/>


    </>
  )




  /*
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + yo mama</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  */
}

export default App
