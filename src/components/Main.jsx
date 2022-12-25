import style from './Main.module.css';
import { TiDelete } from 'react-icons/ti';
import { IoCreateOutline } from 'react-icons/io5';
import FullCard from './FullCard';
import { useState } from 'react';
import Popups from './Popups';
function Main({
  onclick,
  cards,
  removeCard,
  handleOffClickBack,
  handleOnClickBack,
}) {
  const btnMainCard = document.getElementById('btnMainCard');
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
      <div id="btnMainCard">
        <nav className={style.main__navbar}>
          <button
            className={style.main__addIcon}
            onClick={() => {
              onclick();
              handleOffClickBack(btnMainCard);
            }}
          >
            <IoCreateOutline />
          </button>
        </nav>

        <div className={style.main__row}>
          <div className={style.main__cards}>
            {cards.map((card) => {
              return (
                <div
                  className={style.main__card}
                  key={card.id}
                  data-id={card.id}
                >
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
                  <button
                    data-id={cards.indexOf(card)}
                    onClick={(e) => {
                      setIsOpenCard(true);
                      handleClick(e);

                      handleOffClickBack(btnMainCard);
                    }}
                    className={style.card__button}
                  >
                    open
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FullCard
        openCard={isOpenCard}
        closeCard={handleCloseCard}
        getIdCard={getIdCard}
        cards={cards}
        removeCard={removeCard}
        handleOnClickBack={handleOnClickBack}
        handleOffClickBack={handleOffClickBack}
      />
      <Popups handleOnClickBack={handleOnClickBack} />
    </>
  );
}

export default Main;
