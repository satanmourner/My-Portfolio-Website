import React, { Component } from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: [], clicked: false};
    this.print = this.print.bind(this);
    this.refSlide = [];
  }

  print(event) {
    for(let i = 0; i < slide.length; i++) {
      (slide[i].is) ? slide[i].is = false : slide[i].is = true;
      this.setState({show: this.state.show.concat(this.slide)});
    }
    
  }

  render() {
    return (
      <div className="slider">
        <img className="slide-img" src="./Images/wall.png" />
        {slide.map((slide, index) => 
        <div className="slides">
          <div className="container-slide"
          style={{display: slide.is ? "flex" : "none"}}>
            {slide.h1}
            <a href={slide.href} target="_blank">
              <button className="btn-slide">{slide.content} <i className={slide.i} /></button>
            </a>
          </div>
          <div className="dot-slide">
            <i className="fa fa-circle" onClick={this.print} />
            <i className="fa fa-circle" onClick={this.print} />
          </div>
        </div>
        )}
      </div>
    );
  }
}

const slide = [
  {
    is: true,
    h1: <h1>Hi! <br /> i'm Sanaz</h1>, 
    href: "https://docs.google.com/document/d/1sI9rfUIGP4uDuwhj3bFge--Iq4OdHMtgD4lJgey2-BU/edit#",
    content: "viwe cv",
    i: "far fa-file-pdf"},
  {
    is: false,
    h1: <h1>i love building THINGS!!</h1>,
    href: "https://gitlab.com/mahmoudi.sanaz59",
    content: "my projects",
    i: "fas fa-briefcase"
  }
]