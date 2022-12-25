import style from './FullCard.module.css';
import { useState } from 'react';
import UpdateCard from './UpdateCard';

function FullCard({
  openCard,
  closeCard,
  getIdCard,
  cards,
  removeCard,
  handleOnClickBack,
}) {
  const [openForUpd, SetOpenForUpd] = useState(false);
  const cardObject = cards[getIdCard];

  const btnMainCard = document.getElementById('btnMainCard');
  const specialForPop = () => {
    if (btnMainCard !== undefined) {
      btnMainCard.classList.remove('hide');
    } else {
      console.log(btnMainCard);
    }
  };

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
          <button
            id="btnCloseCard"
            onClick={() => {
              closeCard(false);
              handleOnClickBack(btnMainCard);
              specialForPop();
            }}
          >
            close
          </button>
          <button
            onClick={() => {
              removeCard(cardObject);
              closeCard(false);
              cards = { cards };
              handleOnClickBack(btnMainCard);
              specialForPop();
            }}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default FullCard;
