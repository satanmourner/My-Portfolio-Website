import React, { Component } from 'react';

export default class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <h2>who am i?</h2>
        <div className="intro-container">
          <p>i am a computer grad student from university of science and culture.
            i love exploring new technologies of web.<br /> 
            i like most computer fields except "Web Design(UI/UX)" because
            i think it is so difficult for me NOT to include all 
            my personal tastes.<br />
            so this is me and everything you need to know about me.
          </p>
        </div>
      </div>
    );
  }
}