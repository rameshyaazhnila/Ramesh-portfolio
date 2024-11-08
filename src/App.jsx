import React from 'react';
import Navbar from './assets/components/Navbar';
import HomeSection from './assets/components/HomeSection';
import AboutSection from './assets/components/AboutSection';
import Skills from './assets/components/Skills';
import Myservice from './assets/components/Myservice';
import Contact from './assets/components/Contact';


function App() {
  return (
    <div>
      <Navbar/>
      <section id="home" className='pt-16 lg:pt-10'>
        <HomeSection/>
      </section>
      <section id="about">
        <AboutSection/>
      </section>
      <section id="skills" className='overflow-hidden'>
        <Skills/>
      </section>
      <section id="service">
        <Myservice/>
      </section>
      <section id="contact" className='overflow-hidden w-full py-5'>
        <Contact/>
      </section>
    </div>
  );
}

export default App;
