import style from './Main.module.css';

function Main({ onclick, cards }) {
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
                <div className={style.card__title}>
                  <h4>{card.title}</h4>
                </div>
                <div className={style.card__body}>
                  <p className={style.card__body}>{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
