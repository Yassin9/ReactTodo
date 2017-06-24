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


  it('should render clock to output', () => {
    const todoText = 'test text';
    const todoApp = ReactTestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
