import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen text-center flex flex-col items-center justify-center">
        <h2 className="px-6 font-semibold text-white text-3xl">
          Frontyard Real Estate Assignment
        </h2>

        <div className="my-4 w-full flex flex-col  sm:flex-row items-center justify-center gap-2 sm:gap-6 ">
          <p className="text-md text-white font-md">Abhirup Ghosh</p>
          <p className="text-md text-white font-md">
            ghoshabhirup2001@gmail.com
          </p>
        </div>

        <div className="px-6 mt-6 w-full mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <Link to="/contactApp">
            <div className="componentBar">Contact App</div>
          </Link>

          <Link to="/graphApp">
            <div className="componentBar">Charts & Maps App</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
