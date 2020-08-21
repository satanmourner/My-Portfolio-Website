import React, { Component } from 'react';
import './aside.css';

export default class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll = (ref) => ref.current.scrollIntoView({behavior: 'smooth'})

  render() {
    return (
      <aside>
        <div className="aside-container">
          <img className="profile-img" src={process.env.PUBLIC_URL + '/Images/profile.jpg'} />
          <h2>Sanaz Mahmoudi</h2>
          <div className="email">
            <i className="far fa-envelope" />
            <span> mahmoudisanaz59@gmail.com</span>
          </div>
          <div className="content-scroll">
            <a onClick={() => this.scroll(this.props.passRefIntro)}>introduction</a>
            <a onClick={() => this.scroll(this.props.passRefAbout)}>about</a>
            <a onClick={() => this.scroll(this.props.passRefTime)}>timline</a>
          </div>
          <div className="icons">
            <a href="https://twitter.com/SatanMourner" target="_blank"><i className="fab fa-twitter" /></a>
            <a href="https://www.instagram.com/satanmourner/" target="_blank"><i className="fab fa-instagram" /></a>
            <a href="https://www.linkedin.com/in/sanaz-mahmoudi-899448181/" target="_blank"><i className="fab fa-linkedin" /></a>
            <a href="https://github.com/shah59"><i className="fab fa-github" target="_blank" /></a>
            <a href="https://gitlab.com/mahmoudi.sanaz59" target="_blank"><i className="fab fa-gitlab" /></a>
            <a href target="_blank"><i className="fab fa-skype" /></a>
          </div>
          <p>made with <i className="fa fa-heart" /> and <i className="fa fa-coffee" /></p>
        </div>
      </aside>
    );
  }
}