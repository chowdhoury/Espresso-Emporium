import React, { useEffect, useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import productBg from "../../assets/images/more/1.png";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const [products,setProducts]=useState([])
  useEffect(() =>  {
    fetch("http://localhost:3000/coffee").then(res=>res.json()).then(data=>setProducts(data))
  },[])
  return (
    <div
      className="py-30 bg-no-repeat"
      style={{ background: `url(${productBg})`, backgroundSize: "contain" }}
    >
      <section className="flex flex-col items-center">
        <p className="text-xl text-[#1B1A1A] raleway">--- Sip & Savor ---</p>
        <h2 className="text-[55px] text-[#331A15] mt-2 mb-4">
          Our Popular Products
        </h2>
        <Link to={'/add-coffee'} className="flex gap-4 text-2xl bg-[#E3B577] px-4 py-3 border-2 border-[#331A15] hover:bg-transparent hover:text-[#E3B577] hover:border-[#E3B577] transition-colors duration-300 rounded-md items-center">
          Add Coffee<GiCoffeeCup></GiCoffeeCup>
        </Link>
      </section>
      <section className="w-9/12 mx-auto mt-16 grid grid-cols-2 gap-8">
        {
          products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
        }
      </section>
    </div>
  );
};

export default Product;
