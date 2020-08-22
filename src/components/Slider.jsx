import React, { Component } from 'react';
import './section-slider.css';

var slideIndex = 1;

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: []};
    this.clickOnSlide = this.clickOnSlide.bind(this);
    this.refSlide = [];
  }

  clickOnSlide = (event) => {
    for(let i = 0; i < slide.length; i++) {
      slide[i].dis = false;
      if(event.target === this.refSlide[i]) {
       slide[i].dis = true;
       this.setState({show: this.state.show.concat(slide[i].dis)})
      }
    }
  }

  render() {
    return (
      <div className="slider">
        <img className="slide-img" src={process.env.PUBLIC_URL + '/Images/wall.png'} /> 
          <div className="slides">
          {slide.map((slide, index) => (
            <div className="container-slide" key={slide.id}
            style={{display: slide.dis ? "flex" : "none"}}>
              {slide.h1}
              <a href={slide.href} target="_blank">
                <button className="btn-slide">{slide.content} <i className={slide.i} /></button>
              </a>
            </div>
        ))}
          <div className="dot-slide">
            <i className="fa fa-circle" onClick={this.clickOnSlide} ref={ref => this.refSlide.push(ref)} />
            <i className="fa fa-circle" onClick={this.clickOnSlide} ref={ref => this.refSlide.push(ref)} />
          </div>
        </div>
      </div>
    );
  }
}

const slide = [
  {
    id: 0,
    dis: true,
    h1: <h1>Hi! <br /> i'm Sanaz</h1>, 
    href: "https://docs.google.com/document/d/1sI9rfUIGP4uDuwhj3bFge--Iq4OdHMtgD4lJgey2-BU/edit?usp=sharing",
    content: "viwe cv",
    i: "far fa-file-pdf"
  },
  {
    id: 1,
    dis: false,
    h1: <h1>i love building THINGS!!</h1>,
    href: "https://gitlab.com/mahmoudi.sanaz59",
    content: "my projects",
    i: "fas fa-briefcase"
  }
]