/* eslint-disable no-undef,react/no-find-dom-node */
import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';
import $ from 'jQuery';
import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    const spy = expect.createSpy();
    const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.searchText.value = 'Dog';
    ReactTestUtils.Simulate.change(todoSearch.searchText);

    expect(spy).toHaveBeenCalledWith(false ,'dog');
  });

  it('should call onSearch with proper checked value', () => {
    const spy = expect.createSpy();
    const todoSearch = ReactTestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.showCompleted.checked = true;
    ReactTestUtils.Simulate.change(todoSearch.showCompleted);

    expect(spy).toHaveBeenCalledWith(true ,'');
  });

});
