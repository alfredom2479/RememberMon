import {useState} from "react";
import Card from './Card'


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

function Board(){

  const [cards, setCards] = useState(initialCards);

  function randomizeCards(){
    const newCards = [];
    const usedIndices = [];

    while(usedIndices < cards.length){
      let nextIdx = 0;
      do{
        nextIdx = Math.floor(Math.random()*cards.length);
      }
      while(usedIndices.includes(nextIdx));
      usedIndices.push(nextIdx);
      newCards.push(cards[nextIdx]);
    }
    console.log(usedIndices);
    setCards(newCards);
  }

  
  return(
    <>
    <button onClick={randomizeCards}>Randomize</button>
    <div className="board">
      {cards.map((card)=>{
        <Card key={card.name}>{card.image}</Card>
      })} 
    <Card/>
    </div>
    </>
    
  )
}

export default Board;