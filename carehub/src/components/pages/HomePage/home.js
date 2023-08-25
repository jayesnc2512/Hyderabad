import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Navbar from '../../NavbarH';

function Home() {
  return (
    
    <>
    <Navbar />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      
      
      
    </>
  );
}

export default Home;