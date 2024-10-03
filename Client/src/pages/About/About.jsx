import React from 'react';
import Header from '../../components/Header';
import HeroSectionInOtherPages from '../../components/HeroSectionInOtherPages';

function About() {
  return (
    <div>
        <Header/>
        <HeroSectionInOtherPages ImageName='family.jpg'/>
      <h1>About Us</h1>
      <p>This is the About page content.</p>
    </div>
  );
}

export default About;
