import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>Header</div>
      <Link to="/current">Current weather</Link>
      <Link to="history">Previous weather</Link>
    </>
  );
};

export default Header;
