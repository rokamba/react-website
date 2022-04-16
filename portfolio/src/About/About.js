import React from 'react'
import './About.css';
import me from './img/me.jpg'

export default function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={me} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                i am an Experienced coding Bootcamp graduate with extensive knowledge in
                web development, passionate about developing mobile
                applications, and building websites from the ground up.
                Specializes in JavaScript. Professional strengths include
                improving website performance, writing clean, maintainable, and
                reusable code, a good understanding of UI and cross-browser
                compatibility, creative problem-solving, written and verbal
                communication, time management, detail-oriented mindset and a
                team player.
              </p>
              
              <div className="about__button d__flex align__items__center">
                <a href="Rostin O resume.pdf" download="Resume of Rostin_O.pdf">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="Contact">
                  <button className="about btn pointer">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
