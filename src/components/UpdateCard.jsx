import { useState } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import { FiEdit2 } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import style from './UpdateCard.module.css';

function UpdateCard({ openForUpd, cancel, cardObject, cards, setCards }) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const d = Date.now();
  const addTime = `${new Date(d).toLocaleDateString('en-US', options)}`;

  const [updatedObjectTitle, setUpdateObjectTitle] = useState('');
  const [updatedObjectText, setUpdateObjectText] = useState('');

  const handleUpdateObject = () => {
    cardObject.title = updatedObjectTitle;
    cardObject.text = updatedObjectText;
    cardObject.time = addTime;
    cancel();
  };
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
              <label htmlFor="cardTitle"></label>
              <input
                maxLength="20"
                placeholder="date"
                type="text"
                name="cardTitle"
                id="cardTitle"
                defaultValue={cardObject.title}
                className={style.popups__title}
                onChange={(e) => setUpdateObjectTitle(e.target.value)}
              />
            </h3>
          </div>
          <div
            className={style.popups__input}
            dangerouslySetInnerHTML={{ __html: addTime }}
          ></div>
          <div className={style.popups__input}>
            <p>
              <textarea
                maxLength="600"
                placeholder="note"
                type="text"
                className={style.popups__body}
                onChange={(e) => setUpdateObjectText(e.target.value)}
                defaultValue={cardObject.text}
              ></textarea>
            </p>
          </div>
          <div className="editBtn">
            <Button
              className={style.editBtn__edit}
              onClick={() => handleUpdateObject()}
              type="button"
            >
              <FiEdit2 />
            </Button>
            <Button
              className={style.editBtn__back}
              onClick={() => cancel()}
              type="button"
            >
              <TiArrowBackOutline />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCard;
