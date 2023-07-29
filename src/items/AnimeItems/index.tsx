import React from "react";
import { css } from "@emotion/css";
import gql from "graphql";
import styled from "@emotion/styled";
import boruto from "../../assets/boruto.jpg";
import naruto from "../../assets/naruto.jpg";
import deathnote from "../../assets/deathnote.png";
import kimetsu from "../../assets/kimetsunoyaiba.jpg";
import dragonball from "../../assets/dragonball.jpg";
import ac from "../../assets/assasinationclassroom.jpg";
import chainsawman from "../../assets/chainsawman.jpg";
import opm from "../../assets/onepunch.jpg";
import baki from "../../assets/Baki.jpg";
import spy from "../../assets/spy.jpg";
import jujutsu from "../../assets/jujutsu.jpg";
import tokyorevengers from "../../assets/tokyo.jpg";
import { json } from "stream/consumers";
import { useState, useEffect } from "react";
function AnimeItem() {
  let Container = styled.div`
    margin-top: 160px;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
    @media (max-width: 800px) {
      margin-top: 10px;
      grid-template-columns: auto auto;
      justify-content: center;
    }
  `;

  let Items = styled.li`
    color: white;
    padding: 20px;
    text-align: center;
    list-style-type: none;
    border: 0px;
  `;
  return (
    <>
      <Container>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={naruto}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Naruto
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={deathnote}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Death Note
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={kimetsu}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Kimetsu No Yaiba
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={dragonball}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Dragon Ball
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={boruto}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Boruto
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={ac}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Assasination Classroom
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={chainsawman}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Chainsaw Man
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={opm}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              One Punch Man
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={baki}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Baki
            </h1>
          </a>
        </Items>
        <Items>
          <a
            className={css`
              color: white;
              text-decoration: none;
            `}
            href="/detail"
          >
            <img
              className={css`
                width: 200px;
                height: 150px;
                border-radius: 10px;
                transition: transform 0.2s;
                &:hover {
                  transform: scale(1.09);
                }
              `}
              src={spy}
              alt=""
            />
            <h1
              className={css`
                font-size: 20px;
                font-family: "Poppins", sans-serif;
              `}
            >
              Spy X Family
            </h1>
          </a>
        </Items>
      </Container>
    </>
  );
}

export default AnimeItem;
