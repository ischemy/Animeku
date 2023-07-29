import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Navbar from "../../components/Navbar";
import naruto from "../../assets/naruto.jpg";
import dragonball from "../../assets/dragonball.jpg";
import ac from "../../assets/assasinationclassroom.jpg";
import ModalAddCollection from "../ModalAddCollection";
import ModalRemove from "../ModalRemove";
import ModalEditCollection from "../ModalEditCollection";

function CollectionItem() {
  let Container = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    @media (max-width: 800px) {
      grid-template-columns: auto;
      justify-content: center;
    }
  `;

  let Card = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 320px auto auto auto;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 1000px;
    height: 300;
    border-radius: 10px;
    @media (max-width: 800px) {
      width: 700px;
      height: 250px;
      border-radius: 10px;
    }
  `;

  let Banner = styled.div`
    grid-column: 1;
    padding: 10px;
  `;
  let Title = styled.div`
    font-family: "Poppins", sans-serif;
  `;

  let ButtonAdd = styled.div`
    width: 180px;
    height: 30px;
  `;

  return (
    <>
      <Container>
        <ModalAddCollection />
        <Card>
          <Banner>
            <a
              href="/collection/detail"
              className={css`
                color: black;
                text-decoration: none;
              `}
            >
              <img
                src={naruto}
                className={css`
                  width: 300px;
                  height: 200px;
                  border-radius: 10px;
                `}
                alt=""
              />
            </a>
          </Banner>
          <Title>
            <h1>Ninja</h1>
            <p>Naruto, Kimetsu No Yaiba, Spriggan, Nanatsu no Taizai...</p>
            <ModalEditCollection />
            <ModalRemove />
          </Title>
        </Card>
        <Card>
          <Banner>
            <a
              href="/collection/detail"
              className={css`
                color: black;
                text-decoration: none;
              `}
            >
              <img
                src={dragonball}
                className={css`
                  width: 300px;
                  height: 200px;
                  border-radius: 10px;
                `}
                alt=""
              />
            </a>
          </Banner>
          <Title>
            <h1>Sci-Fi</h1>
            <p>Naruto, Kimetsu No Yaiba, Spriggan, Nanatsu no Taizai...</p>
            <ModalEditCollection />

            <ModalRemove />
          </Title>
        </Card>
        <Card>
          <Banner>
            <a
              href="/collection/detail"
              className={css`
                color: black;
                text-decoration: none;
              `}
            >
              <img
                src={ac}
                className={css`
                  width: 300px;
                  height: 200px;
                  border-radius: 10px;
                `}
                alt=""
              />
            </a>
          </Banner>
          <Title>
            <h1>Isekai</h1>
            <p>Naruto, Kimetsu No Yaiba, Spriggan, Nanatsu no Taizai...</p>
            <ModalEditCollection />
            <ModalRemove />
          </Title>
        </Card>
      </Container>
    </>
  );
}

export default CollectionItem;
