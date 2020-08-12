import React, { Component } from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>here are some of my expertise</h2>
        <div className="about-container">
          <div className="content" style={{alignSelf: 'center'}}>
            <div className="logo-content">
              <svg>
                <polygon points="0, 30, 50, 0, 100, 30" fill="rgb(142, 103, 150)" />
              </svg>
              <i className="fas fa-code" />
              <svg>
                <polygon points="0, 0, 50, 30, 100, 0" fill="rgb(142, 103, 150)" />
              </svg>
            </div>
            <h3>web development</h3>
            <p>i have experience building websites and chrome extentions 
              using JavaScript, React, HTML, CSS
            </p>
          </div>
          <div className="content" style={{alignSelf: 'flex-end'}}>
            <div className="logo-content">
              <svg>
                <polygon points="0, 30, 50, 0, 100, 30" fill="rgb(142, 103, 150)" />
              </svg>
              <i className="fa fa-globe" />
              <svg>
                <polygon points="0, 0, 50, 30, 100, 0" fill="rgb(142, 103, 150)" />
              </svg>
            </div>
            <h3>IOT</h3>
            <p>i have experience low-level programming with c 
              and arduino microcontroller
            </p>
          </div>
          <div className="content" style={{alignSelf: 'center'}}>
            <div className="logo-content">
              <svg>
                <polygon points="0, 30, 50, 0, 100, 30" fill="rgb(142, 103, 150)" />
              </svg>
              <i className="fa fa-terminal" />
              <svg>
                <polygon points="0, 0, 50, 30, 100, 0" fill="rgb(142, 103, 150)" />
              </svg>
            </div>
            <h3>programming language</h3>
            <p>i love low-level programming language like c but i have
              experience in golang and python for some small projects
            </p>
          </div>
        </div>
      </div>
    );
  }
}