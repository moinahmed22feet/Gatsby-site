import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../components/Logo";
const NaV = styled.nav`
  ul {
    list-style: none;
    text-align: center;
    display: flex;
    flex-style: row;
    justify-content: space-evenly;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  li {
    --rotate: -4deg;
    transform: rotate(var(--rotate));
    transition: transform 200ms linear;

    &:nth-of-type(1) {
      --rotate: -8deg;
    }
    &:nth-of-type(2) {
      --rotate: 10deg;
    }
    &:nth-of-type(3) {
      --rotate: 4deg;
    }
    &:nth-of-type(4) {
      --rotate: -10deg;
    }
    &:nth-of-type(5) {
      --rotate: 14deg;
    }
    &:not(:nth-of-type(3)):hover {
      --rotate: 3deg
      color: --red;
    }
  }
`;
export default function Nav() {
  return (
    <NaV>
      <ul>
        <li>
          <Link to="/FirstPage">FirstPage</Link>
        </li>
        <li>
          <Link to="/SecondPage">SecondPage</Link>
        </li>
        <li>
          <Logo/>
        </li>
        <li>
          <Link to="/ThirdPage">ThirdPage</Link>
        </li>
        <li>
          <Link to="/FourthPage">fourthPage</Link>
        </li>
      </ul>
    </NaV>
  );
}
