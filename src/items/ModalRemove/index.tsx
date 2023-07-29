import React from "react";
import { css } from "@emotion/css";
import { useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalRemove() {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        className={css`
          font-family: "Poppins", sans-serif;
        `}
      >
        <button
          className={css`
            background-color: #f44336;
            border-radius: 10px;
            margin-top: 40px;
            width: 180px;
            height: 30px;
            color: white;
          `}
          onClick={openModal}
        >
          Remove
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div
            className={css`
              text-align: center;
            `}
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Are you sure you want to remove?
            </h2>

            <button
              onClick={closeModal}
              className={css`
                color: white;
                background-color: #4caf50;
                padding: 5px 15px;
                margin-right: 20px;
                border-radius: 5px;
              `}
            >
              Sure
            </button>
            <button
              onClick={closeModal}
              className={css`
                color: white;
                background-color: #f44336;
                padding: 5px 15px;
                margin-right: 20px;
                border-radius: 5px;
              `}
            >
              No
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ModalRemove;
