import React, { Component } from 'react';
import './App.css';
import './body-container.css';
import Aside from './components/Aside';
import Slide from './components/Slider';
import Intro from './components/Intro';
import About from './components/About';
import Timeline from './components/Timeline';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.introRef = React.createRef();
    this.aboutRef = React.createRef();
    this.timeRef = React.createRef();
  }

  reset = () => window.location.reload(false);

  render() {
    return (
      <div className="container" onLoadedData={this.reset}>
        <Aside passRefIntro={this.introRef} passRefAbout={this.aboutRef} passRefTime={this.timeRef} />
        <section>
          <Slide />
          <Intro innerRef={this.introRef} />
          <About innerRef={this.aboutRef} />
          <Timeline innerRef={this.timeRef} />
        </section>
      </div>
    );
  }
}
  

export default App;
