import {useState, useEffect} from "react";
import axios from 'axios';
import Card from './Card'


const initialCards = [
  {id:0,name: 'name1', image:"image1" },
  {id: 1,name: 'name2', image:"image2" },
  {id: 2,name: 'name3', image:"image3" },
  {id: 3,name: 'name4', image:"image4" },
  {id: 4,name: 'name5', image:"image5" },
  {id: 5,name: 'name6', image:"image6" },
  {id:6,name: 'name7', image:"image7" },
  {id:7,name: 'name8', image:"image8" },
  {id:8,name: 'name9', image:"image9" },
  {id:9,name: 'name10', image:"image10" },
  {id:10,name: "name11", image: "image 11"},
  {id:11,name: "name12", image: "image 12"}
];

function Board(){

  const [cards, setCards] = useState(initialCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore ]= useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokeData, setPokeData] = useState([]);

  //console.log(selectedCards);
  

  useEffect(()=>{
    let isMounted = true;
    const fetchPokeData = async ()=>{
      const pokeIds =[];
      while(pokeIds.length < cards.length){
        let nextId = Math.floor(Math.random()*151) +1;
        if(!pokeIds.includes(nextId)) pokeIds.push(nextId);
      }
      const pokeAPIResults = await Promise.all(
        pokeIds.map(id => fetchPokemon(id))
      );
      console.log(pokeAPIResults[0]);
      if(isMounted){
        setPokeData(pokeAPIResults);
      }
    };
    fetchPokeData();
    

    return ()=>{
      isMounted = false;
    }
  },[]);

  useEffect(()=>{
    randomizeCards();
  },[]);
  
  const fetchPokemon = async pokeId => {
    const response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    return response.data;
  };

  function randomizeCards(){
    const newCards = [];
    const usedIndices = [];

    while(usedIndices.length < cards.length){
      let nextIdx = 0;
      do{
        nextIdx = Math.floor(Math.random()*cards.length);
      }
      while(usedIndices.includes(nextIdx));
      usedIndices.push(nextIdx);
      newCards.push(cards[nextIdx]);
    }
    setCards(newCards);
  }

  function handleClick(cardId){
    console.log(cardId);
    randomizeCards();
    if (selectedCards.includes(cardId)) {
      setScore(0);
      setSelectedCards([]);
    }
    else{
      let newScore = score+1;
      if(newScore > bestScore) setBestScore(newScore);
      setScore(newScore);
      
      setSelectedCards([...selectedCards,cardId]);
    }
  }
  
  return(
    <>
    <div className="header">
      <h1>Current Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
    
    <div className="board">
      {cards.map((card)=>
        <Card 
          onClick={()=>handleClick(card.id)} 
          key={card.id}
          pokeName={pokeData.length>0?pokeData[card.id].name : 'Loading...'}
          pokeImgURI={pokeData.length>0?pokeData[card.id].sprites.other['official-artwork'].front_default : 'Loading...'}
        />
      )} 
    </div>
    </>
    
  )
}

export default Board;