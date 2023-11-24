import { Navbar } from "./../navbar/Navbar";
import Carrousel from "./../carrousel/Carrousel";
import Card from "./../card/Card";
import { Footer } from "/src/components/footer/Footer.jsx";
import { CardPrice } from "../cardPrice/CardPrice";

function Home() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <Card />
      <CardPrice/>
      <Footer />
    </>
  );
}

export default Home;
