import React, { useState } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateCard from './UpdateCard';
import style from './FullCard.module.css';
function FullCard({
  openCard,
  closeCard,
  getIdCard,
  cards,
  removeCard,
  handleOnClickBack,
}) {
  /*_______________________ for modal button______________________*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [openForUpd, SetOpenForUpd] = useState(false);
  const cardObject = cards[getIdCard];

  const btnMainCard = document.getElementById('btnMainCard');
  const specialForPop = () => {
    if (btnMainCard !== undefined) {
      btnMainCard.classList.remove('hide');
    } else {
      console.log(btnMainCard);
    }
  };

  if (!openCard) {
    return;
  }
  return (
    <>
      <div className={style.main__card}>
        <div className={style.main__card__buttons}>
          <button onClick={handleShow} className={style.main__card__btnDelete}>
            <RiDeleteBin2Line />
          </button>
          <button
            className={style.main__card__btnEdit}
            onClick={() => SetOpenForUpd(true)}
          >
            <FiEdit2 />
          </button>
          <UpdateCard
            openForUpd={openForUpd}
            cancel={() => SetOpenForUpd(false)}
            cardObject={cardObject}
          />
          <button
            className={style.main__card__btnBack}
            id="btnCloseCard"
            onClick={() => {
              closeCard(false);
              handleOnClickBack(btnMainCard);
              specialForPop();
            }}
          >
            <TiArrowBackOutline />
          </button>
        </div>
        <div className={style.card__title}>
          <h1>{cardObject.title}</h1>
        </div>
        <div className={style.card__body}>
          <p>{cardObject.text}</p>
        </div>
        <div className={style.card__time}>
          <p>{cardObject.time}</p>
        </div>
      </div>

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
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className={style.modal__close}
          >
            <TiArrowBackOutline />
          </Button>
          <Button
            className={style.modal__delete}
            variant="primary"
            onClick={() => {
              removeCard(cardObject);
              closeCard(false);
              handleOnClickBack(btnMainCard);
              specialForPop();
            }}
          >
            <RiDeleteBin2Line />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FullCard;
