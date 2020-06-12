import styled from 'styled-components';

export const TodoItemBox = styled.div`
	word-break: break-all;
	border-radius: 25px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 2vh 3vw;
	margin: 3vh 1vw;
	text-align: left;
	background-color: #20232a;
	font-size: large;
	box-shadow: 5px 10px 10px #00000010;

	@media screen and (max-width: 800px) {
		padding: 2vh 6vw;
	}

	&:hover {
		& > div {
			opacity: 100%;
		}
		background-color: #1a1a1a;
	}
`;

export const DeleteTodoButtonBox = styled.div`
	padding: 0 10vw;
	align-items: center;
	justify-content: center;
	align-self: center;
	opacity: 0;
`;

export const DeleteTodoButton = styled.div`
	cursor: pointer;
`;
