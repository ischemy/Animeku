import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import AnimeItem from "../../items/AnimeItems";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <AnimeItem />
      <Footer />
    </>
  );
}

export default Home;
