"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface SearchParams {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

interface DetailsPageProps {
  searchParams: SearchParams;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ searchParams }) => {
  console.log(searchParams);

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
      
    </>
  );
};

export default DetailsPage;
