import React from "react";
import { css } from "@emotion/css";
import Navbar from "../../components/Navbar";
import CollectionItem from "../../items/CollectionItem";
import Footer from "../../components/Footer";

function Collection() {
  return (
    <>
      <div>
        <Navbar />
        <CollectionItem />
        <Footer />
      </div>
    </>
  );
}

export default Collection;
