/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDom from 'react-dom';
import $ from 'jQuery';
import Todo from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id onClick', () => {
    const todoData = {
      id: '123',
      text: 'Write todo.test.jsx test',
      completed: true
    };
    const spy = expect.createSpy();
    const todo = ReactTestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    const $el = $(ReactDom.findDOMNode(todo));

    ReactTestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith('123');
  });

  // it('should call onSearch with proper checked value', () => {
  //   const spy = expect.createSpy();
  //   const todo = ReactTestUtils.renderIntoDocument(<Todo onToggle={spy}/>);
  //
  //   todo.showCompleted.checked = true;
  //   ReactTestUtils.Simulate.change(todo.showCompleted);
  //
  //   expect(spy).toHaveBeenCalledWith(true ,'');
  // });
});
