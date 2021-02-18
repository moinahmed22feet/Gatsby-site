import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Typography from "../styles/Typography";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";
import stripes from "../assets/images/stripes.svg"

const ContentStyles = styled.div`
background:white ;
padding: 1rem;

`

const SiteBorderStyles = styled.div`
max-width:95%;
margin: 1rem auto 1rem auto;
background:white url(${stripes});

padding:1rem;


`
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
