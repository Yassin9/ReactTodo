/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the state on handleAddTodo', () => {
    const todoText = 'test text';
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    const id = '2';
    const todos = [
      { id: '1', text: 'Walk the dog', completed: false},
      { id: id, text: 'Clean the yard', completed: false, createdAt: 123, completedAt: undefined},
      { id: '3', text: 'Leave mail on porch', completed: false}
    ];
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos});

    todoApp.handleToggle(id);
    expect(todoApp.state.todos[1].completed).toBe(true);
    expect(todoApp.state.todos[1].completedAt).toBeA('number');
  });

  it('should toggle todo from completed to incompleted', () => {
    const id = '2';
    const todos = [
      { id, text: 'Clean the yard', completed: true, createdAt: 123, completedAt: 321}
    ];
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos});

    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });

});
