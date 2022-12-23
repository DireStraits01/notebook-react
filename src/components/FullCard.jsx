import style from './FullCard.module.css';
import { useState } from 'react';
import UpdateCard from './UpdateCard';

function FullCard({ openCard, closeCard, getIdCard, cards, removeCard }) {
  const [openForUpd, SetOpenForUpd] = useState(false);
  const cardObject = cards[getIdCard];
  if (!openCard) {
    return;
  }
  return (
    <>
      <div className={style.main__card}>
        <div className={style.main__card}>
          <div className={style.card__title}>
            <h1>{cardObject.title}</h1>
          </div>
          <div className={style.card__body}>
            <p>{cardObject.text}</p>
          </div>
          <div className={style.card__time}>
            <p>{cardObject.time}</p>
          </div>
          <button onClick={() => SetOpenForUpd(true)}>update</button>
          <UpdateCard
            openForUpd={openForUpd}
            cancel={() => SetOpenForUpd(false)}
            cardObject={cardObject}
          />
          <button onClick={() => closeCard(false)}>close</button>
          <button
            onClick={() => {
              removeCard(cardObject);
              closeCard(false);
              cards = { cards };
            }}
          >
            delete
          </button>
        </div>{' '}
      </div>
    </>
  );
}

export default FullCard;
