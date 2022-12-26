import style from './Popups.module.css';
import { useState } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import Button from 'react-bootstrap/Button';
import { AiOutlineFileAdd } from 'react-icons/ai';

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
        <h2>Сreate a reminder</h2>
      </div>

      <form>
        <div className={style.popups__input}>
          <h3>
            <input
              placeholder="please input title"
              type="tex`t"
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
              placeholder="please input text"
              type="text"
              className={style.popups__body}
              onChange={(e) => setText(e.target.value)}
            />
          </p>
        </div>
        <div className={style.popups__buttons}></div>
        <Button
          variant="primary"
          className={style.popus__add}
          type="button"
          onClick={() => {
            addCard(title, text, addDate);
            specialForPop();
          }}
        >
          <AiOutlineFileAdd />
        </Button>
        <Button
          variant="secondary"
          className={style.popus__close}
          type="button"
          onClick={() => {
            onCancle();
            specialForPop();
          }}
        >
          <TiArrowBackOutline />
        </Button>
      </form>
    </div>
  );
}

export default Popups;
