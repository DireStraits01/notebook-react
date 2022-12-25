import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoCreateOutline } from 'react-icons/io5';
import { RiDeleteBin2Line } from 'react-icons/ri';
import style from './Main.module.css';
import FullCard from './FullCard';
import Popups from './Popups';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Main({
  onclick,
  cards,
  removeCard,
  handleOffClickBack,
  handleOnClickBack,
  removeAllCards,
}) {
  /*_______________________ for modal button______________________*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*________________________________________________________________*/
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

          <button
            className={style.main__deleteAllIcon}
            onClick={() => removeAllCards()}
          >
            <RiDeleteBin2Line />
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
                      variant="primary"
                      onClick={handleShow}
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

                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      I will not close if you click outside me. Don't even try
                      to press escape key.
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => removeCard(card)}
                      >
                        Understood
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
