import React from "react";
import FooterLogo from "../../assets/images/A2Z-black.svg";
const Footer = () => {
  return (
    <footer>
      <img src={FooterLogo} alt="" />
      <p>
        High-quality materials are made just for you. Designed for modern Guys
        and Girls
      </p>
      <h5>Contact</h5>
      <p id="number">tshirt@a2z.com | Hotline: +1 131 138 138</p>
      <hr />
      <p>DESIGN BY PRINTARO - © 2022. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;
