import React from "react";
import { Button } from "react-daisyui";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero h-[100%]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_1220-4886.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Welcome to MunchMap</h1>
          <p className="mb-5 text-lg">
            Discover delicious recipes for every occasion and explore a world of
            culinary delights. From quick and easy meals to gourmet dishes,
            we've got you covered.
          </p>
          <Link to="/categories">
            <Button className="w-[50%] font-bold text-gray-200 px-4 py-2  rounded-lg bg-orange-500 hover:bg-orange-600 mt-[8%] xl:text-2xl text-xl normal-case ">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
