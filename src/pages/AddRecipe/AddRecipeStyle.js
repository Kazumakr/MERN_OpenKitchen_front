import styled from "styled-components";

export const Container = styled.div`
	padding-top: 50px;
	display: flex;
	justify-content: center;
`;
export const Img = styled.img`
	/* margin-left: 150px; */
	width: 50vw;
	height: 450px;
	border-radius: 10px;
	object-fit: cover;
`;
export const Form = styled.form``;
export const FormGroup = styled.div`
	/* margin-left: 150px; */
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const FormGroupCheck = styled.div`
	/* margin-left: 150px; */
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	/* align-items: flex-start; */
`;
export const Checkbox = styled.input`
	margin-left: 10px;
`;

export const Label = styled.label`
	font-size: 24px;
`;
export const Input = styled.input`
	font-size: 30px;
	padding: 15px;
	width: 50vw;
`;
export const Textarea = styled.textarea`
	width: 50vw;
	height: 30vh;
	padding: 15px;
	font-family: inherit;
	font-size: 20px;
`;
export const Button = styled.button`
	margin-top: 10px;
	color: white;
	background-color: teal;
	padding: 10px;
	border: none;
	border-radius: 10px;
	font-size: 16px;
	cursor: pointer;
	align-self: flex-end;
`;
