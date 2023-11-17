import React from "react";
import { Navbar } from "./../navbar/NavBar";
import Carrousel from "./../carrousel/Carrousel";
import Card from "./../card/Card";
import { Footer } from "/src/components/footer/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
