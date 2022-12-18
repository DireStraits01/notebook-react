import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Popups from './components/Popups';

function App() {
  const [cards, setCards] = useState([]);
  const [isPopusOpen, setIsPopusOpen] = useState(false);

  const onCancel = () => setIsPopusOpen(false);
  console.log();
  const handleAddNote = (title, text, time) =>
    setCards(
      (card) => [...card, { title: title, text: text, time: time }],
      onCancel()
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
