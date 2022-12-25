import style from './Popups.module.css';
import { useState } from 'react';

function Popups({ open, onCancle, addCard }) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const d = Date.now();
  const addDate = `${new Date(d).toLocaleDateString('en-US', options)}`;
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const btnMainCard = document.getElementById('btnMainCard');
  const specialForPop = () => {
    if (btnMainCard !== undefined) {
      btnMainCard.classList.remove('hide');
    } else {
      console.log(btnMainCard);
    }
  };
  if (!open) {
    return;
  }
  return (
    <div className={style.popups__container}>
      <div className={style.head}>
        <h2>Insert</h2>
      </div>

      <form>
        <div className={style.popups__input}>
          <h3>
            <input
              placeholder="data"
              type="text"
              className={style.popups__title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h3>
        </div>
        <div
          className={style.popups__input}
          dangerouslySetInnerHTML={{ __html: addDate }}
        ></div>
        <div className={style.popups__input}>
          <p>
            <textarea
              placeholder="note"
              type="text"
              className={style.popups__body}
              onChange={(e) => setText(e.target.value)}
            />
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            addCard(title, text, addDate);
            specialForPop();
          }}
        >
          submit
        </button>
        <button
          type="button"
          onClick={() => {
            onCancle();
            specialForPop();
          }}
        >
          cancel
        </button>
      </form>
    </div>
  );
}

export default Popups;
