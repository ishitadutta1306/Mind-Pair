import { useEffect, useState } from 'react';  //hooks
import './App.css';
import Card from './Components/Card';

const cardImages=[
  {"src": "./images/crystal.png", matched: false},
  {"src": "./images/fairy-wings.png", matched: false},
  {"src": "./images/key.png", matched: false},
  {"src": "./images/potion.png", matched: false},
  {"src": "./images/ring.png", matched: false},
  {"src": "./images/wizard-hat.png", matched: false}
];

const App=()=>{
  //hold the shuffled deck of cards
  const [cards,setCards]=useState([]);  //'cards' state: empty array with useState([]) & 'setCards' - a func to update the 'cards' state whenever the deck changes

  //hide moves info when the component first loads
  const [showMoves, setShowMoves]=useState(false);  //'showMoves' - a boolean that determines if move info should be shown, whose initial value is set to false , 'setShowMoves' - updates the 'showMoves' state to toggle visibility

  //keep track of the number of moves taken
  const [moves,setMoves]=useState(0);   //initializes the 'turns' state with a value of 0

  //Card choices
  const [choice1, setChoice1]=useState(null);
  const [choice2, setChoice2]=useState(null);

  //disable cards
  const [disabled,setDisabled]=useState(false);

  //shuffle cards
  const shuffleCards=()=>{
    const shuffleCards=[...cardImages,...cardImages] //...: copy or merge arrays-> duplicating card images to have pairs of each card
      .sort(()=>Math.random()-0.5)  //generates a random floating-point number between 0 and 1, subtracting 0.5 shifts this range to -0.5 to +0.5,where each comparison randomly results in positive or negative, creating a random card order, for [A, B]: A stays before B if result -ve
      .map((card)=>({...card, id: Math.random()})); //iterates over each card and creates a new card object, itcopies all properties from the original card using ... and adds a unique id property with Math.random() for tracking each card individually

      //update the states
      setCards(shuffleCards); //updates the 'cards' state with the newly shuffled and duplicated cards array, containing each card in a randomized position with unique identifiers
      setShowMoves(false);
      setMoves(0);

      //clear any previous selections, ensuring no card selections carry over from the previous game
      setChoice1(null);
      setChoice2(null);
  }

  console.log(cards,moves);

  //handles the player's selection of a card, updates the choices, and controls the display of move-related info 
  const handleChoice=(card)=>{  //'card' is the parameter representing the card object that the player has selected
    setShowMoves(true);
    console.log(card);
    choice1?setChoice2(card):setChoice1(card);  //update choice2 if 1st choice already made
  }

  //compare the 2 selected cards
  useEffect(()=>{  //this hook runs whenever choice1 or choice2 changes
    if (choice1 && choice2){  //checks if we have a value for both choice1 & choice2
      setDisabled(true);  //temporarily disable the game board
      
      if (choice1.src===choice2.src){
        setCards(prevCards=>{ //new array created within the callback function: represents the current state of cards before the update, passed to the func
          return prevCards.map(card=>{  //iterates over each 'card' object in 'prevCards' 
            if (card.src===choice1.src){
              return {...card,matched:true};
            }
            else{
              return card;
            }
          });
        });
        console.log("Match!");
        resetTurn();
      }
      else{
        console.log("Not match");
        setTimeout(()=>resetTurn(),1000);  //1s timeout then reset turn 
      }
    }
  },[choice1,choice2]);

  console.log(cards);

  //reset choice & increase moves count
  const resetTurn=()=>{
    setChoice1(null);
    setChoice2(null);
    setMoves(prevMovesCount=>prevMovesCount+1);
    setDisabled(false);
  }

  //start game automatically when the component first loads
  useEffect(()=>{
    shuffleCards();
  },[]);


  return (
    <div className="App">
      <h1>Mind Pair</h1>
      <button onClick={shuffleCards}>New Game</button>

      <p style={{display:showMoves?"block":"none"}} className="moves-count">Moves: {moves}</p>

      <div className="card-grid">
        {cards.map(card=>(
          <Card 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={card===choice1 || card===choice2 || card.matched}  //keep the card flipped in these 3 scenarios
            disabled={disabled}
          /> //card={card},handleChoice={handleChoice},etc are props
        ))}
      </div>
      
    </div>
  );
}

export default App;
