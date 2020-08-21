import React, { Component } from 'react';
import './intro-about.css';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {transH: 0, transD: 0, scrolled: false, op: 0};
    this.translate = this.translate.bind(this);
  }

  componentDidMount = () => window.addEventListener("scroll", this.translate);

  componentWillUnmount = () => window.removeEventListener("scroll", this.translate);

  translate = () => {
    var newTransH = "none";
    var newTransD = "none";
    if(window.pageYOffset > 1000) {
      if(!this.state.scrolled) {
        newTransH = "translateX(0px)";
        newTransD = "translateY(0px)";
        this.setState({transH: newTransH, transD: newTransD, op: 1});
      }
      setTimeout(() => {
        this.setState({scrolled: true});
      }, 500);
    }
  }

  render() {
    return (
      <div className="about" ref={this.props.innerRef}>
        <h2 style={{transitionDelay: "0.1s",
        transform: this.state.transH, opacity: this.state.op}}>here are some of my expertise</h2>
        <div className="about-container">
          <div className="content" style={{alignSelf: 'center', transitionDelay: "0.1s",
          transform: this.state.transD, opacity: this.state.op}}>
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
            <p>i have experience building websites  
              using JavaScript, React, jQuery, HTML, CSS.
            </p>
          </div>
          <div className="content" style={{alignSelf: 'flex-end', transitionDelay: '0.25s',
          transform: this.state.transD, opacity: this.state.op}}>
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
              and arduino microcontroller.
            </p>
          </div>
          <div className="content" style={{alignSelf: 'center', transitionDelay: '0.5s',
          transform: this.state.transD, opacity: this.state.op}}>
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
            <p>
            i like low-level programming languages such as C but i have
            experience in golang and python for some small projects in university.
            </p>
          </div>
        </div>
      </div>
    );
  }
}