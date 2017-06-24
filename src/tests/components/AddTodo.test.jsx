/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });


  it('should call onAddTodo props with valid data', () => {
    const spy = expect.createSpy();
    const addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDom.findDOMNode(addTodo));

    $el.find('input')[0].value = 'check mail';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('check mail');
  });

  it('should not call onAddTodo props when invalid input', () => {
    const spy = expect.createSpy();
    const addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const $el = $(ReactDom.findDOMNode(addTodo));

    $el.find('input')[0].value = '';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});
