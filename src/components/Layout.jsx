import React from "react";
import { Link } from "gatsby";
import Footer from '../components/Footer'

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <nav className="global-nav">
        <ul>
          <li>
            <Link to={"/"} rel="home">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/blog"} rel="blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/about"} rel="about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
