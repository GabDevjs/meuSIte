import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

interface LoadingProps {
  loading: boolean;
}

export const LoadingSection = ({ loading }:LoadingProps) => {
  
  return (
    <div
      className={`fixed z-50 bg-gray-300 dark:bg-backGround overflow-hidden w-screen h-screen ${
        loading == true ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center w-full h-full ">
        <ClipLoader color="#B94E08" size={100} />
      </div>
    </div>
  );
};
