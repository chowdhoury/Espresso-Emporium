import React from "react";
import bg15 from "../../assets/images/more/15.jpg";
import logo from "../../assets/images/more/logo1.png";

const Header = () => {
  return (
    <div
      className="w-full h-[120px] bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gray-300"
      style={{ backgroundImage: `url(${bg15})` }}
      >
          <img className="h-[90px] w-[75px]" src={logo} alt="" />
      <span className="text-white text-[60px]">Espresso Emporium</span>
    </div>
  );
};

export default Header;
