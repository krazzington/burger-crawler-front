import "./Home.scss";
import React from "react";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Main />
      </div>
    </>
  );
};

export default Home;
