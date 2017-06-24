/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  // describe('render', () => {
  //   it('should render clock to output', () => {
  //     const clock = ReactTestUtils.renderIntoDocument(<TodoApp totalSeconds={62}/>);
  //     const $el = $(ReactDom.findDOMNode(clock));
  //     const actualText = $el.find('.clock-text').text();
  //
  //     expect(actualText).toBe('01:02');
  //   });
  // });

});
