import React from "react";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import OurApproach from "./OurApproach";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import Quote from "./Quote";
import Footer from "../../components/Footer";
import GetStarted from "../../components/GetStarted";
import ImageInRight from "../../components/ImageInRight";
import ImageInLeft from "../../components/ImageInLeft";

function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>

      <OurApproach />
      <ImageInLeft
        image="pexels-cedric-fauntleroy-4266939.jpg"
        alt="Imageleft"
        heading="Providing you with a safe space to relax"
        text="All your appointments will take place in our soothing office environment with fully private rooms,
          complimentary tea and water, and individualized care."
      />
      <ImageInRight
        image="pexels-cedric-fauntleroy-4266939.jpg"
        alt="Imageleft"
        heading="Providing you with a safe space to relax"
        text="All your appointments will take place in our soothing office environment with fully private rooms,
          complimentary tea and water, and individualized care."
      />
      {/* <SafeSpace/> */}
      {/* <Remote/> */}
      <OurServices />
      <OurTeam />
      <Quote />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
