import React from "react";
import Button from "../../components/Button";

function OurApproach() {
  return (
    <div className="flex flex-col p-3 my-10 justify-center items-center">
      <h1 className="font-barlow text-7xl py-9 sm:text-[7vh]">Our Approach</h1>
      <p className="text-center text-xl px-44  py-6 sm:px-20 text-[2.5vh]">
        SOULAID is comprised of doctoral-level psychologists and psychiatrists
        committed to delivering quality mental health care. Our collective
        provides therapy, medication management, coaching, and more. We’re here
        to match you with a doctor who understands your needs and is available
        for appointments, whether online or in-person.
      </p>
      <Button title="Learn more"/>
    </div>
  );
}

export default OurApproach;
