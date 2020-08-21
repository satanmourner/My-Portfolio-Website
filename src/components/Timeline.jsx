import React, { Component } from 'react';
import './timeline.css';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {transH: 0, transLeft:0, scrolled: false, op: 0};
    this.translate = this.translate.bind(this);
  }

  componentDidMount = () => window.addEventListener("scroll", this.translate);

  componentWillUnmount = () => window.removeEventListener("scroll", this.translate);

  translate = () => {
    var newTransH = "none";
    var newTransL = "none";
    if(window.pageYOffset > 1500) {
      if(!this.state.scrolled) {
        newTransH = "translateY(0)";
        newTransL = "translateX(0)";
        this.setState({transH: newTransH, transLeft: newTransL, op: 1});
      }
      setTimeout(() => {
        this.setState({scrolled: true});
      }, 500);
    }
  }

  render() {
    return (
      <div className="timeline" ref={this.props.innerRef}>
        <h2 style={{transitionDelay: "0.1s", 
        transform: this.state.transH, opacity: this.state.op}}>timeline</h2>
        <div className="timeline-container t1" style={{transitionDelay: "0.25s",
        transform: this.state.transLeft, opacity: this.state.op}}>
          <div className="left-side">
            <div className="logo-timeline">
              <i className="fas fa-pen" />
            </div>
          </div>
          <div className="main-side">
            <div className="arrow-container">
              <svg>
                <polygon points="0, 10, 10, 0, 10, 20" fill="rgb(142, 103, 150)" />
              </svg>
            </div>
            <div className="main-content">
              <h3>21 Solution, Austria</h3>
              <h4>Front-End Developer</h4>
              <p>I collaborated on a startup project. 
              This project is similar to "Evand.com", but more expanded 
              and it is launched in Österreich.
              I wrote static-base ( HTML, CSS, JS ) pages and while working on this project, 
              I also learned a little React.JS and by refactoring old-fashioned code base 
              to Standard-Formed React.JS code base with the help of a supervisor developer.</p>
            </div>
          </div>    
        </div>
        <div className="timeline-container t2" style={{transitionDelay: "1s", 
        transform: this.state.transH, opacity: this.state.op}}>
          <div className="left-side">
            <div className="logo-timeline">
              <i className="fas fa-pen" />
            </div>
          </div>
          <div className="main-side">
            <div className="arrow-container">
              <svg>
                <polygon points="0, 10, 10, 0, 10, 20" fill="rgb(142, 103, 150)" />
              </svg>
            </div>
            <div className="main-content">
              <h3>ielecom, Karaj</h3>
              <h4>Front-End Internship</h4>
              <p>Due to my limited knowledge of the web, 
              I started as an intern and started to learn basic web technologies 
              and developing static-base pages such as HTML 5, CSS 3 and Bootstrap 4.</p>
            </div>
          </div>    
        </div>
        <div className="timeline-container t1" style={{transitionDelay: "1.75s",
        transform: this.state.transLeft, opacity: this.state.op}}>
          <div className="left-side">
            <div className="logo-timeline">
              <i className="fas fa-pen" />
            </div>
          </div>
          <div className="main-side">
            <div className="arrow-container">
              <svg>
                <polygon points="0, 10, 10, 0, 10, 20" fill="rgb(142, 103, 150)" />
              </svg>
            </div>
            <div className="main-content">
              <h3>Rescue Quadcopter, USC</h3>
              <h4>Undergraduate Project</h4>
              <p>i created a rescue quadcopter and my goal is helping to the injured people
              in emergency situations. i worked with some modules such as Simcard, GPS, Compass
              to route and send qadcopter with geographical coordinates.</p>
            </div>
          </div>    
        </div>
      </div>
    );
  }
}