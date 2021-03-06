/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDom from 'react-dom';
import $ from 'jQuery';
import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should return for each todo item one Todo Component', () => {
    const todos = [
      { id: '1', text: 'Walk the dog'},
      { id: '2', text: 'Clean the yard'},
      { id: '3', text: 'Leave mail on porch'},
      { id: '4', text: 'Play video games'}
    ];
    const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponent = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  });

  it('should return empty message if no todos', () => {
    const todos = [];
    const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const $el = $(ReactDom.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
