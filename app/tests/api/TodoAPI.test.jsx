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

  describe('filterTodos', () => {
    const todos = [{
      id: '1',
      text: 'test1 One',
      completed: true
    },{
      id: '2',
      text: 'test2 Two',
      completed: false
    },{
      id: '3',
      text: 'test Three',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non completed todos if showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return searched todo text', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'three');

      expect(filteredTodos[0].text).toBe(todos[2].text);
    });

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].id).toBe(todos[1].id);
    });

  });

});
