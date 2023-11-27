import { Navbar } from "./../navbar/Navbar";
import Carrousel from "./../carrousel/Carrousel";
import Card from "./../card/Card";
import { Footer } from "/src/components/footer/Footer.jsx";
import { CardPrice } from "../cardPrice/CardPrice";
import ReproductorAudio from './../reproductoAudio/ReproductorAudio';

function Home() {
  return (
    <>
      <div
        className="font-roboto bg-gradient-to-bl from-white via-slate-50 to-green-600
      dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700 "
      >
        <Navbar />
        <Carrousel />
        <Card />
        <CardPrice />
        <ReproductorAudio/>
        <Footer />
      </div>
    </>
  );
}

export default Home;
