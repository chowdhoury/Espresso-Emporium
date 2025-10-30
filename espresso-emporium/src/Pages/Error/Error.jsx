import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import errorBg from '../../assets/images/404/404.gif'

const Error = () => {
    return (
      <div className="flex flex-col items-center justify-center">
            <Link to="/" className="flex items-center justify-center gap-3 my-10">
                <FaArrowLeft></FaArrowLeft>
          <h3 className="text-[30px] text-[#374151]">Back to home</h3>
            </Link>
            <img src={errorBg} alt="" />
      </div>
    );
};

export default Error;
