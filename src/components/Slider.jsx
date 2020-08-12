import React, { Component } from 'react';

export default class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <img className="slide-img" src="./Images/wall.png" />
        <div className="slides">
          <div className="container-slide">
          <h1>hi! <br /> i'm Sanaz</h1>
          <a href="https://docs.google.com/document/d/1sI9rfUIGP4uDuwhj3bFge--Iq4OdHMtgD4lJgey2-BU/edit#" target="_blank">
            <button className="btn-slide">view cv <i className="far fa-file-pdf" /></button>
          </a>
        </div>
        <div className="dot-slide">
          <i className="fa fa-circle" />
          <i className="fa fa-circle" />
          <i className="fa fa-circle" />
        </div>
      </div>
    </div>
    );
  }
}