import React, { Component } from 'react';
import './App.css';
import Aside from './components/Aside';
import Slide from './components/Slider';
import Intro from './components/Intro';
import About from './components/About';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="container">
      <Aside />
      <section>
        <Slide />
        <Intro />
        <About />
        <Timeline />
      </section>
    </div>
  );
}

export default App;
