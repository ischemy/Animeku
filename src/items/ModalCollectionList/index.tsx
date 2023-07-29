import React from "react";
import { css } from "@emotion/css";
import { useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import ModalAddNewCollection from "../ModalAddCollection";

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

function ModalCollectionList() {
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
            border-radius: 10px;
            margin-top: 40px;
            width: 180px;
            height: 30px;
            color: black;
          `}
          onClick={openModal}
        >
          + Add To Collection
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
            <h1
              className={css`
                font-family: "Poppins", sans-serif;
              `}
            >
              Add to Your Collection
            </h1>
            <ModalAddNewCollection />
            <button
              onClick={closeModal}
              className={css`
                color: white;
                background-color: #4caf50;
                width: 180px;
                height: 30px;
                margin-top: 5px;
                border-radius: 5px;
              `}
            >
              + Ninja
            </button>
            <br />
            <button
              onClick={closeModal}
              className={css`
                color: white;
                background-color: #4caf50;
                width: 180px;
                height: 30px;
                border-radius: 5px;
                margin-top: 5px;
              `}
            >
              + Sci-fi
            </button>
            <br />
            <button
              onClick={closeModal}
              className={css`
                color: white;
                background-color: #4caf50;
                width: 180px;
                height: 30px;
                margin-top: 5px;
                border-radius: 5px;
              `}
            >
              + Romance
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ModalCollectionList;
