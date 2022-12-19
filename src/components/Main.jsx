import style from './Main.module.css';
import { TiDelete } from 'react-icons/ti';
import FullCard from './FullCard';
import { useState } from 'react';
function Main({ onclick, cards, removeCard }) {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [getIdCard, setGetIdCard] = useState('');
  const handleClick = (e) => {
    setGetIdCard(e.target.dataset.id);
  };

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
              <div className={style.main__card} key={card.id} data-id={card.id}>
                <div>
                  <TiDelete
                    className={style.main__card_deleteIcon}
                    onClick={() => removeCard(card)}
                  />
                </div>
                <div className={style.card__title}>
                  <h4>{card.title}</h4>
                  {console.log(cards.indexOf(card))}
                </div>
                <div className={style.card__body}>
                  <p className={style.card__body}>{card.text}</p>
                </div>
                <div className={style.card__time}>{card.time}</div>
                <button
                  data-id={cards.indexOf(card)}
                  onClick={(e) => {
                    setIsOpenCard(true);
                    handleClick(e);
                  }}
                  className={style.card__button}
                >
                  open
                </button>
                <FullCard
                  openCard={isOpenCard}
                  closeCard={handleCloseCard}
                  getIdCard={getIdCard}
                  cards={cards}
                  removeCard={removeCard}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
