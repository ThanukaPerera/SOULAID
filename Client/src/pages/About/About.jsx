import React from 'react';
import Header from '../../components/Header';
import HeroSectionInOtherPages from '../../components/HeroSectionInOtherPages';
import ImageInRight from '../../components/ImageInRight';
import ImageInLeft from '../../components/ImageInLeft';
import Footer from '../../components/Footer';
import GetStarted from '../../components/GetStarted';
import OurRates from './OurRates';

function About() {
  return (
    <div>
        <Header/>
        <HeroSectionInOtherPages image='family.jpg' alt='family' heading='We want you to get the care you deserve.'/>
        <ImageInRight image='family.jpg' alt='family' heading="Transforming mental healthcare" text="We are a group of doctoral-level psychologists and psychiatrists who provide quality mental health care. As a mental health collective, we assist members by providing therapy, medication management, coaching, and more. We help our clients connect with one of our doctors who can meet their needs and is available online or in-person."/>
        <ImageInLeft image='family.jpg' alt='family' heading='A modern approach' text='It’s essential for us that our clients get personalized suggestions on who from our team is the best match. Rather than do things the typical way, we’ve created a system designed around our patients’ needs. '/>
        <OurRates/>
        <GetStarted/>
        <Footer/>
    </div>
  );
}

export default About;
