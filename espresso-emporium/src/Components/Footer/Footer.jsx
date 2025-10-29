import React from "react";
import footerBg from "../../assets/images/more/10.png";
import lowerFooterBg from "../../assets/images/more/24.jpg";
import logo from "../../assets/images/more/logo1.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="w-9/12 flex py-20 items-center justify-between">
          <div className="">
            <img className="h-[90px] w-[75px]" src={logo} alt="" />
            <span className="text-[45px] text-[#331A15]mt-6 mb-8">
              Espresso Emporium
            </span>
            <p className="text-xl text-[#1B1A1A] leading-8 max-w-[663px]">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex py-8 gap-4 text-3xl text-[#331A15]">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
            </div>
            <span className="text-[45px] text-[#331A15]mt-6 mb-8">
              Get in Touch
            </span>
            <div className="flex text-xl text-[#1B1A1A] mb-2">
              <FaPhone></FaPhone>{" "}
              <span className="text-[#1B1A1A]">+1 234 567 890</span>
            </div>
            <div className="flex text-xl text-[#1B1A1A] mb-2">
              <FaEnvelope></FaEnvelope>{" "}
              <span className="text-[#1B1A1A]">info@espressoemporium.com</span>
            </div>
            <div className="flex text-xl text-[#1B1A1A] ">
              <FaMapMarkerAlt></FaMapMarkerAlt>{" "}
              <span className="text-[#1B1A1A]">
                123 Coffee St, Espresso City
              </span>
            </div>
          </div>
          <div className="">
            <span className="text-[45px] text-[#331A15]mt-6 mb-8">
              Contact with Us
            </span>
            <form>
              <input
                className="bg-white w-[503px] h-[50px] p-3"
                type="text"
                name="name"
                id=""
                placeholder="Name"
              />
              <br />
              <input
                className="bg-white w-[503px] h-[50px] my-2 p-3"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
              <br />
              <textarea
                className="bg-white w-[503px] resize-none p-3"
                name="message"
                id=""
                cols="30"
                rows="3"
                placeholder="Your Message"
              ></textarea>
              <br />
              <button className="border-2 border-[#331A15] rounded-4xl px-4 py-3 text-[#331A15] text-[25px]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="w-full text-white text-center"
        style={{
          backgroundImage: `url(${lowerFooterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-xl py-3">
          <small>Copyright Espresso Emporium ! All Rights Reserved</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
