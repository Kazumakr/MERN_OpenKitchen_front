import styled from "styled-components";

export const Container = styled.div`
	height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("https://images.unsplash.com/photo-1606787503066-794bb59c64bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
	background-size: cover;
`;
export const Title = styled.span`
	font-size: 50px;
	color: white;
`;
export const Form = styled.form`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	width: 400px;
`;
export const Label = styled.label`
	margin: 10px 0;
	color: white;
`;
export const Input = styled.input`
	padding: 10px;
	background-color: white;
	border: none;
	border-radius: 10px;
`;
export const Button = styled.button`
	margin-top: 20px;
	cursor: pointer;
	background-color: lightcoral;
	color: white;
	padding: 10px;
	border: none;
	border-radius: 10px;
	text-align: center;
	width: 400px;

	:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
`;
