import React from "react";
import Navbar from "./navbar";
// import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        {/* <Footer /> */}
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
