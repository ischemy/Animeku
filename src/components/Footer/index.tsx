import React from "react";
import { css } from "@emotion/css";
import Navbar from "../../components/Navbar";
import styled from "@emotion/styled";

function Footer() {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  let Footer = styled.div`
    color: white;
    text-align: center;
    margin-top: 100px;
  `;
  return (
    <>
      <Footer>
        <p>
          <small>Copywrite © {year} Animeku</small>
        </p>
      </Footer>
    </>
  );
}

export default Footer;
