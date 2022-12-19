import style from './FullCard.module.css';

function FullCard({ openCard, closeCard, getIdCard, cards, removeCard }) {
  const card = cards[getIdCard];
  if (!openCard) {
    return;
  }
  return (
    <>
      <div className={style.main__card}>
        <div className={style.main__card}>
          <div className={style.card__title}>
            <h1>{card.title}</h1>
          </div>
          <div className={style.card__body}>
            <p>{card.text}</p>
          </div>
          <div className={style.card__time}>
            <p>{card.time}</p>
          </div>
          <button>redact</button>
          <button onClick={() => closeCard(false)}>close</button>
          <button
            onClick={() => {
              removeCard(card);
              closeCard(false);
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
