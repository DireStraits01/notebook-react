import style from './UpdateCard.module.css';
import { useState } from 'react';

function UpdateCard({ openForUpd, cancel, cardObject, cards, setCards }) {
  const [updatedObjectTitle, setUpdateObjectTitle] = useState('');
  const [updatedObjectText, setUpdateObjectText] = useState('');
  const handleUpdateObject = (title, text) =>
    setCards(
      { ...cards, [cardObject.title]: title }({
        ...cards,
        [cardObject.text]: text,
      })
    );

  if (!openForUpd) {
    return;
  }
  return (
    <div>
      <div className={style.popups__container}>
        <div className={style.head}>
          <h2>Insert</h2>
        </div>

        <form>
          <div className={style.popups__input}>
            <h3>
              <label for="cardTitle"></label>
              <input
                placeholder="date"
                type="text"
                name="cardTitle"
                id="cardTitle"
                value={cardObject.title}
                className={style.popups__title}
                onChange={(e) =>
                  setUpdateObjectTitle((cardObject.title = e.target.value))
                }
              />
            </h3>
          </div>
          <div className={style.popups__input}></div>
          <div className={style.popups__input}>
            <p>
              <textarea
                placeholder="note"
                type="text"
                className={style.popups__body}
                onChange={(e) =>
                  setUpdateObjectText((cardObject.text = e.target.value))
                }
              >
                {cardObject.text}
              </textarea>
            </p>
          </div>
          <button
            onClick={() =>
              handleUpdateObject(updatedObjectTitle, updatedObjectText)
            }
            type="button"
          >
            update
          </button>
          <button onClick={() => cancel()} type="button">
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCard;
