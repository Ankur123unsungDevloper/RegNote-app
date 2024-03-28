import Heroes from "./heroes";
import Partner from "./partner";
import IgnoreTools from "./ignoretools";
import Features from "./features";
import Services from "./services";
import Bento from "./bento";
import Endless from "./endless";
import Heroine from "./heroine";
import Footer from "./footer";
import Navbar from "../navbar/navbar";

const LandingPage = () => {
  return ( 
    <div>
      <Navbar />
      <Heroes />
      <Partner />
      <IgnoreTools />
      <Features />
      <Services />
      <Bento />
      <Endless />
      <Heroine />
      <Footer />
    </div>
  );
}

export default LandingPage;