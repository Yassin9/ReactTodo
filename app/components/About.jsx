import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="page-title">About</h1>
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <p>This is a Todo application build on React.</p>
          <p>Here are some of the tools I used:</p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> - This was the
              JavaScript framework used.
            </li>
            <li>
              <a href="https://github.com/ReactTraining/react-router">React Router</a> - I use
              it for routing.
            </li>
            <li>
              <a href="http://foundation.zurb.com/">Foundation for Sites 6</a> - I use
              it for styling.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;