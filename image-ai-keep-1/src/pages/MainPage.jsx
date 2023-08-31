import React from "react";
import { Header } from "../components/Header";
import GridImg from "../components/GridImg";

export const MainPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <Header />
        <GridImg/>
      </div>
    </>
  );
};
