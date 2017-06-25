/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import uuid from 'node-uuid';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render clock to output', () => {
    const todoText = 'test text';
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    const id = uuid();
    const todos = [
      { id: uuid(), text: 'Walk the dog', completed: false},
      { id: id, text: 'Clean the yard', completed: false},
      { id: uuid(), text: 'Leave mail on porch', completed: false},
      { id: uuid(), text: 'Play video games', completed: false}
    ];
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: todos});
    todoApp.handleToggle(id);

    expect(todoApp.state.todos[1].completed).toBe(true);
    expect(todoApp.state.todos[0].completed).toBe(false);
  });

});
