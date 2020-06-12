import TodoActionTypes from './todo.types';
import uid from 'uid';

const INITIAL_STATE = {
	todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TodoActionTypes.ADD_ITEM:
			const todo = action.payload;
			todo.id = uid(25);
			console.log(state);
			return {
				...state,
				todos: [todo, ...state.todos],
			};
		case TodoActionTypes.REMOVE_ITEM:
			return {
				...state,
				todos: state.todos.filter(
					(todo) => todo.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};

export default todoReducer;
