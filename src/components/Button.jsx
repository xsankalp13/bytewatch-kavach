import React from "react";
const Button = ({ styles,text,link }) => (
  <a href={link? (link):('#')}>

  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {text? (text): (`Get Started`)}
  </button>
  </a>
);

export default Button;
