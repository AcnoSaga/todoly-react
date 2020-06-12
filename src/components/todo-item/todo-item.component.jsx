import React from 'react';
import {
	TodoItemBox,
	DeleteTodoButtonBox,
	DeleteTodoButton,
} from './todo-item.styles';
import { removeItem } from '../../redux/todo/todo.actions';
import { connect } from 'react-redux';

const TodoItem = ({ item, removeItem }) => {
	return (
		<TodoItemBox>
			{item.text}
			<DeleteTodoButtonBox className='asd'>
				<DeleteTodoButton onClick={() => removeItem(item)}>
					&#10005;
				</DeleteTodoButton>
			</DeleteTodoButtonBox>
		</TodoItemBox>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
