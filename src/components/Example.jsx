import React from 'react';
import {Link} from 'react-router';

const Example = () => {
  return (
    <div>
      <h1 className="page-title">Example</h1>
      <p>Example to try out</p>
      <ol>
        <li>
          <Link to="/?location=marrakech">Marrakech, Morocco</Link>
        </li>
        <li>
          <Link to="/?location=london">London, UK</Link>
        </li>
      </ol>
    </div>
  );
};

export default Example;
