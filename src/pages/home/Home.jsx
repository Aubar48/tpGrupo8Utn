import { Navbar } from "../../components/navbar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import Card from "../../components/card/Card";
import { Footer } from "/src/components/footer/Footer.jsx";
import { CardPrice } from "../../components/cardPrice/CardPrice";
import ReproductorAudio from '../../components/reproductoAudio/ReproductorAudio';

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
