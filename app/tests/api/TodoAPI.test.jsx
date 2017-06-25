import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => localStorage.removeItem('todos'));

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id: '123',
        text: 'test',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {
    it('should return empty array when invalid data passed', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });
    
    it('should return todos if valid array in storage', () => {
      const todos = [{
        id: '123',
        text: 'test',
        completed: false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });
    
  });

});
