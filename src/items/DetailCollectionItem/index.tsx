import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Navbar from "../../components/Navbar";
import dragonball from "../../assets/dragonball.jpg";
import ac from "../../assets/assasinationclassroom.jpg";
import naruto from "../../assets/naruto.jpg";
import ModalRemove from "../ModalRemove";

function DetailCollectionItem() {
  let Container = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    @media (max-width: 800px) {
      grid-template-columns: auto;
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
    height: 300px;
    border-radius: 10px;
    @media (max-width: 800px) {
      width: 700px;
      height: 300px;
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

  return (
    <>
      <Container>
        <Card>
          <Banner>
            <a
              href="/detail"
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
            <ModalRemove />
          </Banner>
          <Title>
            <h1>Naruto</h1>
            <h1>Ratings: 4.5</h1>

            <p>
              {" "}
              Naruto is a Japanese manga series written and illustrated by
              Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young
              ninja who seeks recognition from his peers and dreams of becoming
              the Hokage, the leader of his village. The story is told in two
              parts—the first set in Naruto's pre-teen years, and the second in
              his teens. The series is based on two one-shot manga by Kishimoto:
              Karakuri (1995), which earned Kishimoto an honorable mention in
              Shueisha's monthly Hop Step Award the following year, and Naruto
              (1997).
            </p>
          </Title>
        </Card>
        <Card>
          <Banner>
            <a
              href="/detail"
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
            <ModalRemove />
          </Banner>
          <Title>
            <h1>Naruto</h1>
            <h1>Ratings: 4.5</h1>

            <p>
              {" "}
              Naruto is a Japanese manga series written and illustrated by
              Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young
              ninja who seeks recognition from his peers and dreams of becoming
              the Hokage, the leader of his village. The story is told in two
              parts—the first set in Naruto's pre-teen years, and the second in
              his teens. The series is based on two one-shot manga by Kishimoto:
              Karakuri (1995), which earned Kishimoto an honorable mention in
              Shueisha's monthly Hop Step Award the following year, and Naruto
              (1997).
            </p>
          </Title>
        </Card>
        <Card>
          <Banner>
            <a
              href="/detail"
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
            <ModalRemove />
          </Banner>
          <Title>
            <h1>Naruto</h1>
            <h1>Ratings: 4.5</h1>

            <p>
              {" "}
              Naruto is a Japanese manga series written and illustrated by
              Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young
              ninja who seeks recognition from his peers and dreams of becoming
              the Hokage, the leader of his village. The story is told in two
              parts—the first set in Naruto's pre-teen years, and the second in
              his teens. The series is based on two one-shot manga by Kishimoto:
              Karakuri (1995), which earned Kishimoto an honorable mention in
              Shueisha's monthly Hop Step Award the following year, and Naruto
              (1997).
            </p>
          </Title>
        </Card>
      </Container>
    </>
  );
}

export default DetailCollectionItem;
