"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useStore } from "../../../store/store";

interface SearchParams {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: string;
}

interface DetailsPageProps {
  searchParams: SearchParams;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ searchParams }) => {
  const { addToCart, cartList } = useStore();
  console.log(cartList);
  

  return (
    <>
      <Image
        src={searchParams.image}
        alt="product image"
        width={250}
        height={250}
      />
      <p>{searchParams.title}</p>
      <p>{searchParams.description}</p>
      <p>{searchParams.price}$</p>
      <button
        onClick={() => {
          addToCart(searchParams);
        }}
        className="addToCartBtn"
      >
        Add To Cart
      </button>
    </>
  );
};

export default DetailsPage;
