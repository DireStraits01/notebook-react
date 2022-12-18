import style from './FullCard.module.css';

function FullCard({ openCard, closeCard }) {
  if (!openCard) {
    return;
  }
  return (
    <>
      <div className={style.main__card}>
        <div className={style.main__card}>
          <div className={style.card__title}>
            <h1></h1>
          </div>
          <div className={style.card__body}>
            <p className={style.card__body}></p>
          </div>
          <div className={style.card__time}></div>
          <button>redact</button>
          <button onClick={() => closeCard(false)}>close</button>
          <button>delete</button>
        </div>
      </div>
    </>
  );
}

export default FullCard;
