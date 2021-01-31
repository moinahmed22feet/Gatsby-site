import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Typography from "../styles/Typography";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
export default function Layout({ children }) {
  return (
    <div>
      <Typography />
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
