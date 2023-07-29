import React from "react";
import { css } from "@emotion/css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/DetailAnime";
import DetailCollection from "./pages/DetailCollection";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/detail" element={<DetailCollection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
