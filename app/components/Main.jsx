import React from 'react';
import Nav from 'Nav';

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Main;