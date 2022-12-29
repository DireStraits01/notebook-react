import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Popups from './components/Popups';
import UpdateCard from './components/UpdateCard';

let cardId = 0;

function App() {
  const [cards, setCards] = useState([]); // main array for note
  const [isPopusOpen, setIsPopusOpen] = useState(false); // array for close and open popup(Popup.jsx)

  //_____function for disuable click for background when popup swiitch on
  const handleOffClickBack = (element) => {
    if (element !== null && !element.classList.contains('screen')) {
      element.classList.add('hide');
    } else {
      console.log('noooo');
    }
  };
  //____function for aviable click for background when popup swiitch off
  const handleOnClickBack = (element) => {
    if (element !== null && !element.classList.contains('screen')) {
      element.classList.remove('hide');
    } else {
    }
  };
  //___________________________________________________________________

  //______________________local storage________________________________

  useEffect(() => {
    if (cards.length !== 0) {
      localStorage.setItem('cardsLocal', JSON.stringify(cards));
    }
  }, [cards]);

  useEffect(() => {
    const cardsLocal = JSON.parse(localStorage.getItem('cardsLocal'));
    if (cardsLocal) {
      setCards(cardsLocal);
    }
  }, []);
  //___________________________________________________________________

  const createUniqueId = () => {
    // function add id for cards
    return cardId++;
  };
  const onCancel = () => {
    setIsPopusOpen(false);
  };
  //_______________________________________________________________________

  //_______________________add new note to array___________________________
  const handleAddNote = (title, text, time) =>
    setCards(
      (card) => [
        ...card,
        { id: createUniqueId(), title: title, text: text, time: time },
      ],
      onCancel()
    );
  //_______________________________________________________________________

  //______________________-delete note from main array_____________________
  const handleRemoveCard = (cardForRemove) =>
    setCards(cards.filter((card) => card.id !== cardForRemove.id));
  //_________________________________________________________________________

  //_____________________clear all notes_____________________________________
  const handleRemoveAllCard = () => {
    setCards([]);
  };
  //_____________________________________________________________________

  return (
    <div className="App">
      <Main
        handleOffClickBack={handleOffClickBack}
        onclick={() => setIsPopusOpen(true)}
        cards={cards}
        handleOnClickBack={handleOnClickBack}
        removeCard={handleRemoveCard}
        removeAllCards={handleRemoveAllCard}
      />
      <Popups
        open={isPopusOpen}
        onCancle={onCancel}
        addCard={handleAddNote}
        cards={cards}
      />
      <UpdateCard setCards={setCards} />
    </div>
  );
}

export default App;
