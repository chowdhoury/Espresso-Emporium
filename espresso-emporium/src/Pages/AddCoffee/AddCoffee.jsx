import React from "react";
import detailsBg from "../../assets/images/more/11.png";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo
    };
    // console.log(newCoffee)
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId!=null) {
          toast.success("Coffee added Successfully");
          form.reset()
        }
    })
  };
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
        <div className="bg-[#F4F3F0] rounded-sm py-20 px-40 mb-20">
          <div className="justify-items-center mb-10">
            <h2 className="text-4xl text-[#331A15] mb-8 w-fit">
              Add New Coffee
            </h2>
            <p className="text-xl raleway text-[#1B1A1AB2] max-w-[932px]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleAddCoffee}>
            <div className="flex gap-10">
              <div className="flex-1">
                <label className="raleway" htmlFor="">
                  Name
                </label>
                <br />
                <input
                  className="w-full bg-white rounded-sm p-2 raleway mb-3"
                  type="text"
                  placeholder="Enter Coffee Name"
                  required
                  name="name"
                />
                <br />
                <label className="raleway" htmlFor="">
                  Supplier
                </label>
                <br />
                <input
                  className="w-full bg-white rounded-sm p-2 raleway mb-3"
                  type="text"
                  placeholder="Enter Coffee Supplier"
                  required
                  name="supplier"
                />
                <br />
                <label className="raleway" htmlFor="">
                  Category
                </label>
                <br />
                <input
                  className="w-full bg-white rounded-sm p-2 raleway mb-3"
                  type="text"
                  placeholder="Enter Coffee Category"
                  required
                  name="category"
                />
              </div>
              <div className="flex-1">
                <label className="raleway" htmlFor="">
                  Chef
                </label>
                <br />
                <input
                  className="w-full bg-white rounded-sm p-2 raleway mb-3"
                  type="text"
                  placeholder="Enter Coffee Chef"
                  required
                  name="chef"
                />
                <br />
                <label className="raleway" htmlFor="">
                  Taste
                </label>
                <br />
                <input
                  className="w-full bg-white rounded-sm p-2 raleway mb-3"
                  type="text"
                  placeholder="Enter Coffee Taste"
                  required
                  name="taste"
                />
                <br />
                <label className="raleway" htmlFor="">
                  Details
                </label>
                <br />
                <input
                  className="w-full bg-white rounded-sm p-2 raleway mb-3"
                  type="text"
                  placeholder="Enter Coffee Details"
                  required
                  name="details"
                />
              </div>
            </div>
            <div>
              <label className="raleway" htmlFor="">
                Photo
              </label>
              <br />
              <input
                className="w-full bg-white rounded-sm p-2 raleway mb-3"
                type="url"
                placeholder="Enter Photo URL"
                required
                name="photo"
              />
              <br />
              <button className="w-full cursor-pointer border-2 text-2xl text-[#242222] px-4 py-3 bg-[#E3B577] rounded-sm">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
