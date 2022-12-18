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
  console.log();
  const handleAddNote = (title, text, time) =>
    setCards(
      (card) => [
        ...card,
        { id: createUniqueId(), title: title, text: text, time: time },
      ],
      onCancel(),
      console.log(cards)
    );

  return (
    <div className="App">
      <Main onclick={() => setIsPopusOpen(true)} cards={cards} />
      <Popups
        open={isPopusOpen}
        onCancle={onCancel}
        handleAddNote={handleAddNote}
      />
    </div>
  );
}

export default App;
