import React, { useState } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { AddItemInputBox } from './add-item-input.styles';
import { addItem } from '../../redux/todo/todo.actions';
import { connect } from 'react-redux';

const AddItemInput = ({ addItem }) => {
	const [input, setInput] = useState('');
	return (
		<AddItemInputBox>
			<InputGroup>
				<Input
					onChange={(event) => setInput(event.target.value)}
					value={input}
					type='textarea'
				/>
				<InputGroupAddon addonType='append'>
					<Button
						color='success'
						type='submit'
						onClick={() => {
							if (input !== '') {
								setInput('');
								addItem({
									text: input,
								});
							}
						}}
					>
						Add Todo
					</Button>
				</InputGroupAddon>
			</InputGroup>
		</AddItemInputBox>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(AddItemInput);
