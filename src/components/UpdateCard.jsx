import style from './UpdateCard.module.css';

function UpdateCard({ openForUpd, cancel }) {
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
              <input
                placeholder="data"
                type="text"
                className={style.popups__title}
              />
            </h3>
          </div>
          <div className={style.popups__input}></div>
          <div className={style.popups__input}>
            <p>
              <textarea
                placeholder="note"
                type="text"
                className={style.popups__body}
              />
            </p>
          </div>
          <button type="button">submit</button>
          <button onClick={() => cancel()} type="button">
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCard;
