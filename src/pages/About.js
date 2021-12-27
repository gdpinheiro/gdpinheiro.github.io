import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';

function About() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <h1>About Me</h1>
      <div>
        <section>
          <img
            src='https://avatars.githubusercontent.com/u/83473804?s=400&u=d34bed963f296bfa5b75036caa64d496172278ea&v=4'
            alt="Giovanni's profile"
            width='200px'
          />
          <p>
            My name is <strong>Giovanni Duarte Pinheiro</strong>, i'm 24 years
            old.
            <br />
            I'm a web development student at Trybe with knowledge in JS and
            React. Trybe <br />
            Brazilian | Assis, São Paulo
          </p>
        </section>
        <section>
          <ul>
            <strong>My Skills</strong>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Empathy</li>
            <li>Proactivity</li>
            <li>Willingness to help</li>
          </ul>
          <ul>
            <strong>My Hobbies</strong>
            <li>Watching TV Shows</li>
            <li>Watching Movies (Horror is my favorite genre)</li>
            <li>Listen to Music</li>
            <li>Play Games</li>
            <li>Watching YouTube</li>
            <li>Play repique</li>
          </ul>
        </section>
      </div>
      <Link to='/projects'>Check out my projects!</Link>
    </div>
  );
}

export default About;
