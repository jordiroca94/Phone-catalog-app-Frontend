import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PhoneListContainer from "../components/PhoneListContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <PhoneListContainer />
      <Footer/>
    </div>
  );
};

export default Home;
