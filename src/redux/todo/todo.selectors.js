const { createSelector } = require('reselect');

const selectTodos = (state) => state.todo;

export const selectAllTodos = createSelector([selectTodos], (todos) => {
	console.log(todos);
	return todos.todos;
});
