import style from './Main.module.css';
import { TiDelete } from 'react-icons/ti';
function Main({ onclick, cards, removeCard }) {
  return (
    <>
      <nav className={style.main__navbar}>
        <button className={style.main__addIcon} onClick={onclick}></button>
      </nav>

      <div className={style.main__row}>
        <div className={style.main__cards}>
          {cards.map((card, index) => {
            return (
              <div className={style.main__card} key={index}>
                <div>
                  <TiDelete
                    className={style.main__card_deleteIcon}
                    onClick={() => removeCard(card)}
                  />
                </div>

                <div className={style.card__title}>
                  <h4>{card.title}</h4>
                </div>
                <div className={style.card__body}>
                  <p className={style.card__body}>{card.text}</p>
                </div>
                <div className={style.card__time}>{card.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
