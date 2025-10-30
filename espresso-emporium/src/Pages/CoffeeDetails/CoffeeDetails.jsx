import React from "react";
import detailsBg from "../../assets/images/more/11.png";
import { Link, useLoaderData } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const CoffeeDetails = () => {
  const data = useLoaderData()
  // console.log(data);
  const { _id, name, supplier, category, chef, taste, details, photo } =
    data;
  return (
    <div
      className=""
      style={{ background: `url(${detailsBg})`, backgroundSize: "cover" }}
    >
      <div className="w-9/12 mx-auto">
        <Link
          to="/"
          className="flex items-center justify-start gap-3 my-10 w-fit"
        >
          <FaArrowLeft></FaArrowLeft>
          <span className="text-[30px] text-[#374151]">Back to home</span>
        </Link>
        <div className="mb-20 bg-[#F4F3F0] rounded-sm flex items-center justify-center gap-50">
          <img
            className="h-[450px] w-[350px] object-cover"
            src={photo}
            alt=""
          />
          <div>
            <h3 className="text-4xl text-[#331A15] mb-8">Niceties</h3>
            <div className="flex flex-col gap-3 text-xl text-[#5C5B5B]">
              <p className="raleway">
                <span className="raleway text-[#1B1A1A] font-semibold">Name: </span>{name}
              </p>
              <p className="raleway">
                <span className="raleway text-[#1B1A1A] font-semibold">Chef: </span>{chef}
              </p>
              <p className="raleway">
                <span className="raleway text-[#1B1A1A] font-semibold">Supplier: </span>{supplier}
              </p>
              <p className="raleway">
                <span className="raleway text-[#1B1A1A] font-semibold">Taste: </span>{taste}
              </p>
              <p className="raleway">
                <span className="raleway text-[#1B1A1A] font-semibold">Category: </span>{category}
              </p>
              <p className="raleway">
                <span className="raleway text-[#1B1A1A] font-semibold">Details: </span>{details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
