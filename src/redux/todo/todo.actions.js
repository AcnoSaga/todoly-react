import TodoActionTypes from './todo.types';

export const addItem = (item) => ({
	type: TodoActionTypes.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: TodoActionTypes.REMOVE_ITEM,
	payload: item,
});
