import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Stats from '../components/landing/Stats';
import Services from '../components/landing/Services';
import Features from '../components/landing/Features';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}