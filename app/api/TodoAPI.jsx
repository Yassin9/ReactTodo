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
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = todos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      if (searchText.length === 0) return true;
      const text = todo.text.toLowerCase();
      return text.indexOf(searchText) > -1;
    });

    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) return -1;
      if (a.completed && !b.completed) return 1;
      return 0;
    });

    return filteredTodos;
  }
};
