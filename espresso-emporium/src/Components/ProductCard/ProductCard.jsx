import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { _id, name, supplier, category, chef, taste, details, photo } = product;
  
  const handleDelete = () => {
    console.log(_id);
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method:'DELETE'
    }).then(res => res.json()).then(data => {
      console.log(data)
      if(data.deletedCount) toast.success("Deleted Success Fully")
    })
  }
  return (
    <div className="flex items-center bg-[#f5f4f196] rounded-lg justify-between p-10">
      <img className="h-60 w-[190px] object-cover" src={photo} alt="" />
      <div className="text-xl text-[#5C5B5B]">
        <h3 className="raleway">
          <span className="raleway font-semibold text-[#1B1A1A]">Name: </span>
          {name}
        </h3>
        <h3 className="raleway">
          <span className="raleway font-semibold text-[#1B1A1A]">Chef: </span>
          {chef}
        </h3>
        <h3 className="raleway">
          <span className="raleway font-semibold text-[#1B1A1A]">Price: </span>
          $5.00
        </h3>
      </div>
      <div className="flex flex-col gap-4 text-2xl text-white justify-center">
        <Link
          to={`/coffee/${_id}`}
          className="bg-[#D2B48C] h-10 w-10 rounded-lg content-center justify-items-center cursor-pointer"
        >
          <FaEye></FaEye>
        </Link>
        <Link
          to={`/update-coffee/${_id}`}
          className="bg-[#3C393B] h-10 w-10 rounded-lg content-center justify-items-center cursor-pointer"
        >
          <FaEdit></FaEdit>
        </Link>
        <span
          onClick={handleDelete}
          className="bg-[#EA4744] h-10 w-10 rounded-lg content-center justify-items-center cursor-pointer"
        >
          <MdDeleteForever></MdDeleteForever>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
