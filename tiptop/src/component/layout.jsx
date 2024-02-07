import React from "react";
import Navbar from "./navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
