import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Popups from './components/Popups';
import UpdateCard from './components/UpdateCard';

let cardId = 0;

function App() {
  const handleOffClickBack = (element) => {
    if (element !== null && !element.classList.contains('screen')) {
      element.classList.add('hide');
    } else {
      console.log('noooo');
    }
  };

  const handleOnClickBack = (element) => {
    if (element !== null && !element.classList.contains('screen')) {
      element.classList.remove('hide');
    } else {
      console.log('yeee');
    }
  };

  const [cards, setCards] = useState([]);
  const [isPopusOpen, setIsPopusOpen] = useState(false);

  const createUniqueId = () => {
    return cardId++;
  };
  const onCancel = () => {
    setIsPopusOpen(false);
  };

  const handleAddNote = (title, text, time) =>
    setCards(
      (card) => [
        ...card,
        { id: createUniqueId(), title: title, text: text, time: time },
      ],
      onCancel()
    );

  const handleRemoveCard = (cardForRemove) =>
    setCards(cards.filter((card) => card.id !== cardForRemove.id));

  return (
    <div className="App">
      <Main
        handleOffClickBack={handleOffClickBack}
        onclick={() => setIsPopusOpen(true)}
        cards={cards}
        handleOnClickBack={handleOnClickBack}
        removeCard={handleRemoveCard}
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
