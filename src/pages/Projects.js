import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';

function Projects() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <h1>Projects</h1>
      <main>
        <div>
          <h3>Lessons Learned</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-lessons-learned/pull/76'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Playground Functions</h3>
          <a href='https://github.com/tryber/sd-015-a-project-playground-functions/pull/12'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Pixels Art</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-pixels-art/pull/19'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Todo List</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-todo-list/pull/90'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Trybewarts</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-trybewarts/pull/102'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>JS Unit Tests</h3>
          <a href='https://github.com/tryber/sd-015-a-project-js-unit-tests/pull/56'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Zoo Functions</h3>
          <a href='https://github.com/tryber/sd-015-a-project-zoo-functions/pull/63'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Shopping Cart</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-shopping-cart/pull/19'>
            Pull Request
          </a>
        </div>
        <div>
          <h3> Movie Cards Library</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-movie-cards-library/pull/66'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Tryunfo</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-tryunfo/pull/76'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Trybetunes</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-trybetunes/pull/52'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Front-End Online Store</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-frontend-online-store/pull/25'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>React Testing Library</h3>
          <a href='https://github.com/tryber/sd-015-a-project-react-testing-library/pull/57'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Trybe Wallet</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-trybewallet/pull/21'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Trivia</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-trivia-react-redux/pull/14'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Star Wars Planets Search</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-starwars-planets-search/pull/45'>
            Pull Request
          </a>
        </div>
        <div>
          <h3>Recipes APP</h3>
          <a href=''>Live Page</a>
          <a href='https://github.com/tryber/sd-015-a-project-recipes-app/pull/228'>
            Pull Request
          </a>
        </div>
      </main>
      <Link to='/contact'>Contact me!</Link>
    </div>
  );
}

export default Projects;
