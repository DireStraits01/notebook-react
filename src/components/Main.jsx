import style from './Main.module.css';
import { TiDelete } from 'react-icons/ti';
import FullCard from './FullCard';
import { useState } from 'react';
function Main({ onclick, cards, removeCard, onClickOpenCard }) {
  const [isOpenCard, setIsOpenCard] = useState(false);

  const handleCloseCard = () => {
    setIsOpenCard(false);
  };
  return (
    <>
      <nav className={style.main__navbar}>
        <button className={style.main__addIcon} onClick={onclick}></button>
      </nav>

      <div className={style.main__row}>
        <div className={style.main__cards}>
          {cards.map((card) => {
            return (
              <div className={style.main__card} key={card.id}>
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
                <button onClick={() => setIsOpenCard(true)}>open</button>
                <FullCard openCard={isOpenCard} closeCard={handleCloseCard} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
