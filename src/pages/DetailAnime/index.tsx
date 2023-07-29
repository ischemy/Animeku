import React from "react";
import { css } from '@emotion/css'
import Navbar from "../../components/Navbar";
import DetailAnime from "../../items/DetailAnimeItems";
import Footer from "../../components/Footer";

function Detail() {
  return (
    <>
      <div>
        <Navbar/>
        <DetailAnime/>
        <Footer/>
      </div>
    </>
  );
}

export default Detail;
