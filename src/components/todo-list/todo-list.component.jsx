import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import TodoItem from '../todo-item/todo-item.component';
import { createStructuredSelector } from 'reselect';
import { selectAllTodos } from '../../redux/todo/todo.selectors';

const TodoList = ({ todos }) => {
	var todoList = todos;
	console.log(todoList.length);
	console.log(todoList);
	return (
		<Container fluid>
			{todoList.map((todoItem) => (
				<TodoItem key={todoItem.id} item={todoItem} />
			))}
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	todos: selectAllTodos,
});

export default connect(mapStateToProps)(TodoList);
