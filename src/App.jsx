import './App.css';
import { useState } from 'react';

const App = () => {

  const allcards = {"1+1":"Two","2+2":"Four","3+3":"Six","4+4":"Eight","5+5":"Ten"
  ,"6+4":"Ten","1+2":"Three","2+3":"Five","3+7":"Ten","2+4":"Six"}
  var currentfrontcard = Object.keys(allcards)[0]
  var currentbackcard = allcards[currentfrontcard]
  const totalCards = Object.keys(allcards).length

  const [cards, addCards] = useState(0)
  const [cardstate, setCards] = useState(Object.keys(allcards)[cards])

  const nextCards = () => {
    if (cards < totalCards-1) {
      addCards(cards + 1);
      setCards(Object.keys(allcards)[cards+1])
    }
  }

  const prevCards = () => {
    if (cards > 0) {
      addCards(cards - 1);
      setCards(Object.keys(allcards)[cards-1])
    }
  }

  const flipCards = () => {
    setCards(allcards[Object.keys(allcards)[cards]])
  }



  return (
    <div className="App">
      <div className = "header">
        <h1>The Ultimate Math Quiz</h1>
        <h2>How good are you in math?</h2> 
        <h3>Number of Cards: {totalCards} </h3>
      </div>
      <div className="container">
        <div onClick={flipCards} className="upgrade">
          {cardstate}
        </div>
      </div>
      <br />
      <button onClick={prevCards}>Previous</button>
      <button onClick={nextCards}>Next</button>
    </div>
  )
}

export default App