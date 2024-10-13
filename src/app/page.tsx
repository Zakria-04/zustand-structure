"use client";
import React, { useEffect } from "react";
import { useStore } from "../../store/store";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { data, fetchData, isLoading, loginUser } = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const Loading = () => {
    return (
      <div className="loadingContainer">
        {isLoading && <h2 className="loadingTxt">Loading...</h2>}
      </div>
    );
  };
  console.log(data);

  const RenderData = () => {
    return (
      <>
        {data.map((item: any) => (
          <Link
            href={{
              pathname: "/details",
              query: {...item},
            }}
            key={item.id}
          >
            <div className="itemContainer">
              <p>{item.title}</p>
              <Image
                src={item.image}
                width={150}
                height={150}
                alt="product image"
              />
              <p>{item.price}$</p>
            </div>
          </Link>
        ))}
      </>
    );
  };

  const Signin = () => {
    return <div></div>;
  };

  return (
    <>
      <h1>Zustand-structure</h1>
      {isLoading && <Loading />}
      <RenderData />
    </>
  );
};

export default page;
