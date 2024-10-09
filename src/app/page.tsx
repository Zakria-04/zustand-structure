"use client";
import React, { useEffect } from "react";
import { useStore } from "../../store/store";
import Image from "next/image";

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
      <div>
        {data.map((item: any) => (
          <div>
            <p>{item.title}</p>
            <Image
              src={item.image}
              width={150}
              height={150}
              alt="product image"
            />
            <p>{item.price}$</p>
          </div>
        ))}
      </div>
    );
  };

  const Signin = () => {

    return (
      <div>

      </div>
    )
  }

  return (
    <>
      <h1>Zustand-structure</h1>
      {isLoading && <Loading />}
      <RenderData />
    </>
  );
};

export default page;
