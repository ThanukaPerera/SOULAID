import React from "react";
import image1 from "../../resources/pexels-shkrabaanthony-7579119.jpg";
import Button from "../../components/Button";
import Card from "../../components/Card";

function OurTeam() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className="font-barlow text-7xl mb-16">Meet Our Team</h1>
      <div className="flex gap-10 justify-center items-end mx-16 sm:flex-col ">
        <Card image="pexels-shkrabaanthony-7579119.jpg" name="Dr Nallapperuma" alt="family" />
        <Card image="pexels-shkrabaanthony-7579119.jpg" name="Dr Nallapperuma" alt="family" />
        <Card image="pexels-shkrabaanthony-7579119.jpg" name="Dr Nallapperuma" alt="family" />
        <Card image="pexels-shkrabaanthony-7579119.jpg" name="Dr Nallapperuma" alt="family" />
      </div>

      <Button title="Learn more" />
    </div>
  );
}

export default OurTeam;
