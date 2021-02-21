import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Typography from "../styles/Typography";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import stripes from "../assets/images/stripes.svg";

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

const SiteBorderStyles = styled.div`
  max-width: 96%;
  border-spacing: 15px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 7rem);
  background: white url(${stripes});
  border: 5px solid white
  ;

  box-shadow: 0 0 5px 3px rgb(0 0 0 / 4%);
  padding: 5px;
  padding: clamp(5px, 1vw, 20px);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
export default function Layout({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
