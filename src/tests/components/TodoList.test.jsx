/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import TodoList from 'TodoList';
import uuid from 'node-uuid';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should return for each todo item one Todo Component', () => {
    const todos = [
      { id: uuid(), text: 'Walk the dog'},
      { id: uuid(), text: 'Clean the yard'},
      { id: uuid(), text: 'Leave mail on porch'},
      { id: uuid(), text: 'Play video games'}
    ];
    const todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponent = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  });

});
