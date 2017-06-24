/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import Todo from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  // describe('render', () => {
  //   it('should render todo to output', () => {
  //     const todo = ReactTestUtils.renderIntoDocument(<Todo totalSeconds={62}/>);
  //     const $el = $(ReactDom.findDOMNode(todo));
  //     const actualText = $el.find('.todo-text').text();
  //
  //     expect(actualText).toBe('01:02');
  //   });
  // });
  //
});
