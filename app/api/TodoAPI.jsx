import isArray from 'lodash/isArray';
export default {
  setTodos(todos) {
    if (isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos() {
    const todosString = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(todosString);
    } catch(e) {
      console.log(e);
    }

    return isArray(todos) ? todos : [];
  }
};
