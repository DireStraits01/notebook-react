import { useState } from 'react';
import './App.css';
import Main from './components/Main';

import Popups from './components/Popups';

let cardId = 0;

function App() {
  const [cards, setCards] = useState([]);
  const [isPopusOpen, setIsPopusOpen] = useState(false);

  const createUniqueId = () => {
    return cardId++;
  };
  const onCancel = () => setIsPopusOpen(false);
  // const closeCard = () => setIsCardOpen(false);

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

  // const handleOpenCard = (cardForOpen) => {
  //   setCards(cards.filter((card) => card.id === cardForOpen));
  // };

  return (
    <div className="App">
      <Main
        onclick={() => setIsPopusOpen(true)}
        cards={cards}
        removeCard={handleRemoveCard}
      />
      <Popups
        open={isPopusOpen}
        onCancle={onCancel}
        addCard={handleAddNote}
        cards={cards}
      />
    </div>
  );
}

export default App;
