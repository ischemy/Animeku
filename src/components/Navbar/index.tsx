import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import logo from "../../assets/LOGO.png";

function Navbar() {
  let WrapList = styled.ul`
    display: inline;
    list-style-type: none;
    @media (max-width: 800px) {
      display: flex;
      justify-content: flex-center;
    }
  `;
  let NavbarList = styled.li`
    display: inline;
    height: 150px;
    padding: 10px 20px;
  `;

  return (
    <>
      <div>
        <a href="/">
          <img
            className={css`
              width: 160px;
              float: left;
              width: 100px;
            `}
            src={logo}
            alt=""
          />
        </a>
        <nav
          className={css`
            padding-top: 30px;
          `}
        >
          <WrapList>
            <NavbarList>
              <a
                className={css`
                  color: white;
                  text-decoration: none;
                `}
                href="/"
              >
                Home
              </a>
            </NavbarList>
            <NavbarList>
              <a
                className={css`
                  color: white;
                  text-decoration: none;
                `}
                href="/collection"
              >
                Collection
              </a>
            </NavbarList>
          </WrapList>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
