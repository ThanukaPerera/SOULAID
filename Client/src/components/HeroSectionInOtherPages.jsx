import React from 'react';

function HeroSectionInOtherPages(props) {
  return (
    <div className="relative flex flex-col justify-center items-center w-full">
      <img src={require(`../resources/${props.image}`)} alt={props.alt} className="w-full" />
      <h1 className="absolute text-center text-primary text-7xl font-barlow">{props.heading}</h1>
    </div>
  );
}

export default HeroSectionInOtherPages;
