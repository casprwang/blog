import React from "react";
import "typeface-source-code-pro";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default ({ children }) => (
  <>
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  </>
);
