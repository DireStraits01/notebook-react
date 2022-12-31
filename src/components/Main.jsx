import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoCreateOutline } from 'react-icons/io5';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { TiArrowBackOutline } from 'react-icons/ti';
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
  /*_______________________ for modal button Card Delete______________________*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*________________________________________________________________*/

  /*_______________________ for modal button All Cards Delete______________________*/
  const [showAll, setShowAll] = useState(false);
  const handleCloseAll = () => setShowAll(false);
  const handleShowAll = () => setShowAll(true);
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

              console.log(true + false);
            }}
          >
            <IoCreateOutline />
          </button>

          {!!cards.length && (
            <div className={style.main__navbar_counter}>
              <p>{cards.length}</p>
            </div>
          )}

          <button
            id="btnForAllDelete"
            className={style.main__deleteAllIcon}
            onClick={handleShowAll}
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
                    className={style.main__card__btnOpen}
                  >
                    read
                  </button>

                  <Modal
                    className="my-modal"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Delete note </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Delete {cards.title} {card.time}?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className={style.modal__delete}
                        variant="primary"
                        onClick={() => {
                          removeCard(card);
                          handleClose();
                        }}
                      >
                        <RiDeleteBin2Line />
                      </Button>
                      <Button
                        variant="secondary"
                        className={style.modal__close}
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        <TiArrowBackOutline />
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

      <Modal
        className="my-modal"
        show={showAll}
        onHide={handleCloseAll}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete All </Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete {cards.length} reminders?</Modal.Body>
        <Modal.Footer>
          <Button
            className={style.modal__delete}
            variant="primary"
            onClick={() => {
              removeAllCards();
              handleCloseAll();
            }}
          >
            <RiDeleteBin2Line />
          </Button>
          <Button
            variant="secondary"
            className={style.modal__close}
            onClick={handleCloseAll}
          >
            <TiArrowBackOutline />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Main;
