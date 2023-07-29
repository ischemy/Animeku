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

function ModalEditCollection() {
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
            color: white;
            background-color: #4caf50;
            border-radius: 10px;
            width: 180px;
            height: 30px;
          `}
          onClick={openModal}
        >
          Edit
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
            <form>
              <label>
                Edit Name Collection :
                <input type="text" name="name" />
              </label>
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
                OK{" "}
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ModalEditCollection;
