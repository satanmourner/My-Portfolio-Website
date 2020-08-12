import React, { Component } from 'react';

export default class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline">
        <h2>timeline</h2>
        <div className="timeline-container">
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
        <div className="timeline-container">
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
        <div className="timeline-container">
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