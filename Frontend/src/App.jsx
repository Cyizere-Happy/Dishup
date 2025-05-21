import Navbar from "./NavBar/NavBar";
import './index.css';
import { useState } from 'react'; 
import Hero from "./Hero/Hero";
import Service from "./services/service";
import Title from "./Title/title";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Testimonies from "./Testimonies/Testimonies";

const App = () => {
  const [playStatus, setPlaystatus] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle='Our services' Title='What we Offer' />
      <Service />
      <About playStatus={playStatus} setPlaystatus={setPlaystatus} /> 
      <Title subTitle='Delicious Gournments' Title="Buy more it's Free!" />
      <Gallery />
      <Title subTitle='TESTIMONIALS' Title='What clients say' />
      <Testimonies />
      <Title subTitle='CONTACT' Title='Get in touch' />
    </div>
  );
};

export default App;