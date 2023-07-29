import React from "react";
import { css } from "@emotion/css";
import Navbar from "../../components/Navbar";
import DetailCollectionItem from "../../items/DetailCollectionItem";
import Footer from "../../components/Footer";

function DetailCollection() {
  return (
    <>
      <div>
        <Navbar />
        <DetailCollectionItem />
        <Footer/>
      </div>
    </>
  );
}

export default DetailCollection;
