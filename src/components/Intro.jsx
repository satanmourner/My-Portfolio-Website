import React, { Component } from 'react';
import './intro-about.css';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {trans: 0, scrolled: false, op: 0}
    this.translate = this.translate.bind(this);
  }

  componentDidMount = () => window.addEventListener("scroll", this.translate);

  componentWillUnmount = () => window.removeEventListener("scroll", this.translate);

  translate = () => {
    var newTrans = "none";
    if(window.pageYOffset > 500) {
      if(!this.state.scrolled) {
        newTrans = "translate(0px)";
        this.setState({trans: newTrans, op: 1});
      }
      setTimeout(() => {
        this.setState({scrolled: true});
      }, 500);
    }
  }

  render() {
    return (
      <div className="intro" ref={this.props.innerRef} style={{transitionDelay: "0.1s", 
      transform: this.state.trans, opacity: this.state.op}}>
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
