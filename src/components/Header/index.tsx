import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [locale, setLocale] = useState(null);

  const onLocaleChange = (e) => {
    const {value} = e.target;
    setLocale(value);
  }

  return (
    <>
      <input type="text" onChange={onLocaleChange} />

      {/* TODO: Prevent user from navigating to page if locale is null */}
      <Link to={`/current/${locale}`}>Current weather</Link>
      <Link to={`/history/${locale}`}>Previous weather</Link>
    </>
  );
};

export default Header;
