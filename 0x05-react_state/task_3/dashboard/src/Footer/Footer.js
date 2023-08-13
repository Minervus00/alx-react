import React from  'react';
import { AppContext } from '../App/AppContext';
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
  const context = React.useContext(AppContext);
  return (
    <>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {context.user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
    </>
  );
}

export default Footer;
