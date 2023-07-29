import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Navbar from "../../components/Navbar";
import naruto from "../../assets/naruto.jpg";
import ModalCollectionList from "../ModalCollectionList";

function DetailAnime() {
  let Container = styled.div`
    display: grid;
    grid-template-columns: 500px auto auto auto;
    margin-top: 20px;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    @media (max-width: 800px) {
      grid-template-columns: auto;
      justify-content: center;
    }
  `;

  let Banner = styled.div`
    grid-column: 1;
  `;

  let Title = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    @media (max-width: 800px) {
      grid-column: 1;
    }
  `;

  let Desc = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    color: white;
    font-family: "Poppins", sans-serif;
    text-align: justify;
    @media (max-width: 800px) {
      grid-column: 1;
    }
  `;

  let ButtonAdd = styled.button`
    width: 180px;
    height: 30px;
  `;
  return (
    <>
      <Container>
        <Banner>
          <img
            src={naruto}
            className={css`
              width: 500px;
              height: 400px;
              border-radius: 10px;
              justify-content: start;
            `}
            alt=""
          />
        </Banner>
        <Title>
          <h1
            className={css`
              color: white;
              text-align: start;
              font-family: "Poppins", sans-serif;
            `}
          >
            Naruto
          </h1>
          <h1
            className={css`
              color: white;
              text-align: start;
              font-family: "Poppins", sans-serif;
            `}
          >
            Rating: 4.5
          </h1>
          <ModalCollectionList />
        </Title>

        <h1
          className={css`
            color: white;
            text-align: start;
            font-family: "Poppins", sans-serif;
          `}
        >
          Description :
        </h1>

        <Desc>
          Naruto is a Japanese manga series written and illustrated by Masashi
          Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who
          seeks recognition from his peers and dreams of becoming the Hokage,
          the leader of his village. The story is told in two parts—the first
          set in Naruto's pre-teen years, and the second in his teens. The
          series is based on two one-shot manga by Kishimoto: Karakuri (1995),
          which earned Kishimoto an honorable mention in Shueisha's monthly Hop
          Step Award the following year, and Naruto (1997). Naruto was
          serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from
          1999 to 2014, with its chapters collected in 72 tankōbon volumes. The
          manga was adapted into an anime television series produced by Pierrot
          and Aniplex, which broadcast 220 episodes from 2002 to 2007; the
          English dub of the series aired on Cartoon Network and YTV from 2005
          to 2009. Naruto: Shippuden, a sequel to the original series, premiered
          in 2007, and ended in 2017, after 500 episodes. The English dub was
          broadcast on Disney XD from 2009 to 2011, airing the first 98
          episodes, and then switched over to Adult Swim's Toonami programming
          block in January 2014, starting over from the first episode. Viz Media
          began streaming the anime series on their streaming service Neon Alley
          in December 2012 on 99 episodes, and ended in March 2016, after 338
          episodes. Besides the anime series, Pierrot has developed eleven
          movies and twelve original video animations (OVAs). Other
          Naruto-related merchandise includes light novels, video games, and
          trading cards developed by several companies.
        </Desc>
      </Container>
    </>
  );
}

export default DetailAnime;
