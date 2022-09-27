import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export const LoadingSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      className={`fixed z-50  bg-backGround overflow-hidden w-screen h-screen ${
        loading == true ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center w-full h-full ">
        <ClipLoader color="#B94E08" size={100} />
      </div>
    </div>
  );
};
